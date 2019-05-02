import { EVEAPI } from '../constants';

const setAuthToken = (state = '', action) => {
    if (action.type === EVEAPI.SET_AUTH_TOKEN) {
        return action.code;
    }

    return state;
};

export default setAuthToken;