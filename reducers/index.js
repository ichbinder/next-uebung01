import { combineReducers } from 'redux';

import setAuthToken from './eveApiReducers';
import setChar from './eveChar';

const rootReducer = combineReducers({
  authToken: setAuthToken,
  char: setChar,
});

export default rootReducer;
