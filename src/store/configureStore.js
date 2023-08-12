import { createStore, applyMiddleware } from 'redux';
import homeScreen from '../reducers/homescreenReducer';

const middlewares = [
    /* other middlewares */
];

if (__DEV__) {
    const createDebugger = require("redux-flipper").default; // Flipper redux plugin
    middlewares.push(createDebugger());
}

const store = createStore(homeScreen, applyMiddleware(...middlewares));

export default store;
