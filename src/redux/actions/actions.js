import { ADD_EXPENSE, INIT_BAL, REMOVE_EXPENSE, SET_BAL, SET_EXPENSE, SET_LIMIT } from "../types/types";

// Action Creators
export const setLimit = (value) => {
  !value ? value = '0' : value;
  return {
    type: SET_LIMIT,
    payload: value,
  };
};

export const setBalance = (value) => {
  !value ? value = '0' : value;
  return {
    type: SET_BAL,
    payload: value,
  }
};

export const setInitBalance = (value) => {
  !value ? value = '0' : value;
  return {
    type: INIT_BAL,
    payload: value,
  }
}

export const setExpense = (value) => {
  !value ? value = '0' : value;
  return {
    type: SET_EXPENSE,
    payload: value,
  }
};

export const addExpense = (value) => {
  !value ? value = '0' : value;
  return {
    type: ADD_EXPENSE,
    payload: value,
  }
};

export const removeExpense = (value) => {
  return {
    type: REMOVE_EXPENSE,
    payload: value,
  }
};

export const setRedux = (value, type) => {
  return {
    type: type,
    payload: value
  }
}