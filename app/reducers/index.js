import { combineReducers } from 'redux';

import currencies from './currencies';
import themes from './themes';
import alertas from './alertas';

export default combineReducers({
  currencies,
  themes,
  alertas,
});
