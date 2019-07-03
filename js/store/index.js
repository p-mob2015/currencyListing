import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './reducers';
import appSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);

const appMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducer,
  applyMiddleware(appMiddleware),
);
appMiddleware.run(appSaga);

persistStore(store);

export default store;
