import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import homeScreen from '../reducers/homescreenReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const middlewares = [
    /* other middlewares */
];

if (__DEV__) {
    const createDebugger = require("redux-flipper").default; // Flipper redux plugin
    middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(persistConfig, homeScreen)
let store = createStore(persistedReducer, applyMiddleware(...middlewares));
let persistor = persistStore(store);

export { store, persistor };