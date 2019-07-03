import { LOAD_CURRENCIES, SET_CURRENCIES_COUNT } from '../actions/currencies';
import { currencies as initialState } from './initialState';
import { remoteReducer } from './base';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES_COUNT:
      return {
        ...state,
        count: action.count,
      };
    default:
      return remoteReducer(LOAD_CURRENCIES, state, action);
  }
}

export default reducer;
