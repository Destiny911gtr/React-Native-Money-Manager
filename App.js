/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import Navigator from './src/components/navigator/navigator';
import store from './src/store/configureStore';
import * as constants from './src/styles/colors/constants';
import { realmConfig } from './src/utils/database';

const { RealmProvider } = realmConfig;

function App() {
  return (
    <RealmProvider>
      <Provider store={store}>
        <PaperProvider theme={constants.darkTheme}>
          <Navigator />
        </PaperProvider>
      </Provider>
    </RealmProvider>
  );
}

export default App;
