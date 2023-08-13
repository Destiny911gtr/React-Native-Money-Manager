/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import RealmPlugin from 'realm-flipper-plugin-device';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/store/configureStore';
import * as constants from './src/styles/colors/constants';
import { realmConfig } from './src/utils/database';
import LoadingScreen from './src/components/screens/loadingscreen';
import StackNavigation from './src/components/navigator/stack-navigation';

const { RealmProvider } = realmConfig;

const App = () => {

  useEffect(() => {
    if (__DEV__) {
      RNAsyncStorageFlipper(AsyncStorage); // Flipper AsyncStorage plugin
    }
  }, []);

  return (
    <RealmProvider>
      {/* Flipper realm db plugin */}
      {__DEV__ && <RealmPlugin realms={[realmConfig]} />}
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

export default App;
