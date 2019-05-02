import { EVEAPI } from '../constants';

const setLoginDialog = (state = false, action) => {
    if (action.type === EVEAPI.LOGIN_DIALOG) {
        return action.open;
    }

    return state;
};

export default setLoginDialog;