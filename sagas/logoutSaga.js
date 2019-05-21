import { put, call, take, select } from 'redux-saga/effects';

import { EVEAPI } from '../constants';
import { logout } from '../api';

export const getAuthToken = state => state.authToken;

export function* handleLogout() {
  const authToken = yield select(getAuthToken);
  // const resLogout = yield call(logout, authToken);
  console.log(authToken);

  yield put({ type: EVEAPI.SET_CHAR_ID, id: null, name: null });
  yield put({ type: EVEAPI.SET_AUTH_TOKEN, code: null });
}

export default function* watchLogoutSaga() {
  yield take(EVEAPI.LOGOUT);
  yield call(handleLogout);
}
