import Faker from 'faker';

import reducer from './currencies';
import * as actions from '../actions/currencies';
import { currencies as initialState } from './initialState';

describe('Currency reducer', () => {
  const startState = { ...initialState };
  let finishState;

  it('should start with the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should correctly handle LOAD_CURRENCIES', () => {
    finishState = {
      ...startState,
      isLoading: true,
      error: null,
    };

    expect(reducer(startState, {
      type: actions.LOAD_CURRENCIES,
    })).toEqual(finishState);
  });

  it('should correctly handle LOAD_CURRENCIES_SUCCESS', () => {
    const randomData = Faker.helpers.createCard();

    finishState = {
      ...startState,
      isLoaded: true,
      error: null,
      data: {...randomData},
    };

    expect(reducer(startState, {
      type: `${actions.LOAD_CURRENCIES}_SUCCESS`,
      result: randomData,
    })).toEqual(finishState);
  });

  it('should correctly handle LOAD_CURRENCIES_FAILURE', () => {
    const error = Faker.lorem.sentence();

    finishState = {
      ...startState,
      error,
      isLoaded: true,
    };

    expect(reducer(startState, {
      type: `${actions.LOAD_CURRENCIES}_FAILURE`,
      error,
    })).toEqual(finishState);
  });

  it('should correctly handle SET_CURRENCIES_COUNT', () => {
    const count = Faker.random.number();

    finishState = {
      ...startState,
      count,
    };

    expect(reducer(startState, {
      type: actions.SET_CURRENCIES_COUNT,
      count,
    })).toEqual(finishState);
  });
});
