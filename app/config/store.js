import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import rootSata from './sagas';

const sagaMiddleware = createSagaMiddleware();

let enhancer;
if (process.env.NODE_ENV === 'development') {
  enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
} else {
  enhancer = applyMiddleware(sagaMiddleware);
}

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSata);

export default store;
