import { MMKV } from 'react-native-mmkv';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import homeScreen from '../reducers/homescreenReducer';

const storage = new MMKV();
const reduxStorage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storage.delete(key);
        return Promise.resolve();
    },
};

const persistConfig = {
    key: 'root',
    storage: reduxStorage
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

export { persistor, store };
