import { all, fork } from 'redux-saga/effects';

import getCharIdSaga from './getCharIdSaga';
import logout from './logoutSaga';

export default function* rootSaga() {
  yield all([
    fork(getCharIdSaga),
    fork(logout),
  ]);
}
