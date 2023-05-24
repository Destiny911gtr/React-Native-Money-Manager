import { createStore } from 'redux';
import homeScreen from '../reducers/homescreenReducer';

const store = createStore(homeScreen);

export default store;
