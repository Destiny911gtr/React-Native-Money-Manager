/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import StackNavigation from './src/components/navigator/stack-navigation';
import LoadingScreen from './src/components/screens/loadingscreen';
import { persistor, store } from './src/store/configureStore';
import * as constants from './src/styles/colors/constants';
import { realmConfig } from './src/utils/database';

const { RealmProvider } = realmConfig;

const App = () => {

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

export default App;
