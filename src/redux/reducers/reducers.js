import { ADD_EXPENSE, FIRST_LAUNCH, INIT_BAL, REMOVE_EXPENSE, SET_BAL, SET_EXPENSE, SET_LIMIT } from '../types/types';

const initialState = {
  limit: '0',
  balance: '0',
  initialBalance: '0',
  spent: '0',
  firstLaunch: true
};

const homeScreen = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_BAL:
      return { ...state, balance: action.payload };
    case SET_EXPENSE:
      return { ...state, spent: action.payload };
    case INIT_BAL:
      return { ...state, initialBalance: action.payload };
    case ADD_EXPENSE:
      return { ...state, spent: parseFloat(state.spent) + parseFloat(action.payload), balance: parseFloat(state.balance) - parseFloat(action.payload) };
    case REMOVE_EXPENSE:
      return { ...state, spent: parseFloat(state.spent) - parseFloat(action.payload), balance: parseFloat(state.balance) + parseFloat(action.payload) };
    case FIRST_LAUNCH:
      return { ...state, firstLaunch: action.payload };
    default:
      return state;
  }
};

export default homeScreen;
