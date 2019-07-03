import { call, put } from 'redux-saga/effects';

import { CurrencyService } from '@app/services';
import { LOAD_CURRENCIES, SET_CURRENCIES_COUNT } from '../actions/currencies';

export function* loadCurrencies({ count }) {
  try {
    const res = yield call(CurrencyService.loadCurrencies, count);

    yield put({ type: `${LOAD_CURRENCIES}_SUCCESS`, result: res.data });
    yield put({ type: SET_CURRENCIES_COUNT, count });
  } catch (error) {
    yield put({ type: `${LOAD_CURRENCIES}_FAILURE`, error });
  }
}
