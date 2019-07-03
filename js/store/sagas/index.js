import { takeLatest } from 'redux-saga/effects';

import { LOAD_CURRENCIES } from '../actions/currencies';
import { loadCurrencies } from './currencies';

export default function* appSaga() {
  yield takeLatest(LOAD_CURRENCIES, loadCurrencies);
}
