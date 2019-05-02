import { combineReducers } from 'redux';

import setAuthToken from './eveApiReducers';
import setLoginDialog from './eveLoginDialog';

const rootReducer = combineReducers({
    authToken: setAuthToken,
    isLoginDialogOpen: setLoginDialog,
});

export default rootReducer;