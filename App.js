/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import { ToastAndroid } from 'react-native';
import codePush from "react-native-code-push";
import { MMKV } from "react-native-mmkv";
import { initializeMMKVFlipper } from "react-native-mmkv-flipper-plugin";
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LoadingScreen from './src/components/screens/loadingscreen';
import * as constants from './src/components/styles/colors/constants';
import StackNavigation from './src/navigation/stack-navigation';
import { persistor, store } from './src/redux/store';
import { realmConfig } from './src/utils/database';

const { RealmProvider } = realmConfig;
const storage = new MMKV();
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

const MyApp = () => {

  useEffect(() => {
    if (__DEV__) {
      initializeMMKVFlipper({ default: storage });
    }
    codePush.sync({
      updateDialog: false,
      installMode: codePush.InstallMode.ON_NEXT_RESTART
    },
      (status) => {
        switch (status) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            ToastAndroid.show('Checking for updates...', ToastAndroid.LONG);
            break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            ToastAndroid.show('Downloading update...', ToastAndroid.LONG);
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            ToastAndroid.show('Installing update...', ToastAndroid.LONG);
            break;
          case codePush.SyncStatus.UPDATE_INSTALLED:
            ToastAndroid.show('Update installed and will be applied on next app restart.', ToastAndroid.LONG);
            break;
          case codePush.SyncStatus.UP_TO_DATE:
            ToastAndroid.show('App is up to date.', ToastAndroid.LONG);
            break;
          case codePush.SyncStatus.SYNC_IN_PROGRESS:
            console.log('Sync in progress...');
            break;
        }
      });
  }, [])

  return (
    <RealmProvider>
      <Provider store={store}>
        <PaperProvider theme={constants.darkTheme}>
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <StackNavigation />
          </PersistGate>
        </PaperProvider>
      </Provider>
    </RealmProvider>
  );
}

let App = codePush(codePushOptions)(MyApp);

export default App;
