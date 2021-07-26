import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reducers from '../Reducers';
import watch from '../Sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const pReducer = persistReducer(persistConfig, Reducers);
const store = createStore(pReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
export {store, persistor};

sagaMiddleware.run(watch);
