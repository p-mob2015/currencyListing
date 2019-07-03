import * as actions from './currencies';

describe('Currency actions', () => {
  it('should trigger an action to <load currencies>', () => {
    const expectedAction = {
      type: actions.LOAD_CURRENCIES,
    };

    expect(actions.loadCurrencies()).toEqual(expectedAction);
  });

  it('should trigger an action to <set currencies count>', () => {
    const expectedAction = {
      type: actions.SET_CURRENCIES_COUNT,
    };

    expect(actions.setCurrenciesCount()).toEqual(expectedAction);
  });
});
