import { storeData } from "../utils/helperFuntions";
import { REMOVE_EXPENSE, SET_BAL, SET_EXPENSE, SET_LIMIT } from "./types";

// Action Creators
export const setLimit = (value) => {
  !value ? value = '0' : value;
  storeData('@limit', value);
  return {
    type: SET_LIMIT,
    payload: value,
  };
};

export const setBalance = (value) => {
  !value ? value = '0' : value;
  storeData('@balance', value);
  return {
    type: SET_BAL,
    payload: value,
  }
};

export const setExpense = (value) => {
  !value ? value = '0' : value;
  return {
    type: SET_EXPENSE,
    payload: value,
  }
};

export const removeExpense = (value) => {
  return {
    type: REMOVE_EXPENSE,
    payload: value,
  }
};