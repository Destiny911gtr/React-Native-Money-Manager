import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import { reduxStorage } from '../utils/helperFuntions';
import homeScreen from './reducers/reducers';

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
