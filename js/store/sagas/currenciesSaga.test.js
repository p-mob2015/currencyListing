import { call, put } from 'redux-saga/effects';
import assert from 'assert';
import Faker from 'faker';

import * as actions from '../actions/currencies';
import { CurrencyService } from '@app/services';
import { loadCurrencies } from './currencies';

describe('Currency saga', () => {
  test('loadCurrencies saga test', () => {
    const action = { count: Faker.random.number(5) };
    const generator = loadCurrencies(action);

    assert.deepEqual(
      generator.next().value,
      call(CurrencyService.loadCurrencies, action.count),
      'it should call CurrencyService.loadCurrencies',
    );

    const result = Array(action.count).fill(0).map(_i => ({ name: Faker.finance.currencyName() }));
    assert.deepEqual(
      generator.next({ data: result }).value,
      put({ type: `${actions.LOAD_CURRENCIES}_SUCCESS`, result }),
      'it should call return LOAD_CURRENCIES_SUCCESS',
    );

    const error = Faker.lorem.sentence();
    assert.deepEqual(
      generator.throw({
        error,
      }).value,
      put({
        type: `${actions.LOAD_CURRENCIES}_FAILURE`,
        error: { error },
      }),
      'it should call LOAD_CURRENCIES_FAILURE',
    );

    assert.deepEqual(
      generator.next().done,
      true,
      'it should be done',
    );
  });
});
