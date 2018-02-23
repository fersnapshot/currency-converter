import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from '../reducers';

const enhancer = composeWithDevTools(applyMiddleware(logger));

export default createStore(reducers, enhancer);
