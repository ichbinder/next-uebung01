import { EVEAPI } from '../constants';

const getEveApiAccess = code => ({
  type: EVEAPI.ACCESS,
  code,
});

const setEveApiAuthToken = code => ({
  type: EVEAPI.SET_AUTH_TOKEN,
  code,
});

const eveLoginDialog = open => ({
  type: EVEAPI.LOGIN_DIALOG,
  open,
});

const getCharId = authToken => ({
  type: EVEAPI.CHAR_ID,
  authToken,
});

const setChar = (id, name) => ({
  type: EVEAPI.SET_CHAR_ID,
  id,
  name,
});

const logout = () => ({
  type: EVEAPI.LOGOUT,
});

export {
  getEveApiAccess,
  setEveApiAuthToken,
  eveLoginDialog,
  getCharId,
  setChar,
  logout,
};
