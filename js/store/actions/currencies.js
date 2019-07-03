export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';
export const SET_CURRENCIES_COUNT = 'SET_CURRENCIES_COUNT';

export const loadCurrencies = count => ({
  type: LOAD_CURRENCIES,
  count,
});

export const setCurrenciesCount = count => ({
  type: SET_CURRENCIES_COUNT,
  count,
});
