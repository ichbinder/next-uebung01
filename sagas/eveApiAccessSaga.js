import { put, call, take, select } from 'redux-saga/effects';

import { EVEAPI } from '../constants';
import { fetchEveApiAccess } from '../api';

export const getAuthToken = state => state.authToken;

export function* handleEveApiAccess(authToken) {
    const apiKeys = yield call(fetchEveApiAccess, authToken);
    console.log(apiKeys);
    
}

export default function* watchEveApiAccessSaga() {
    const authToken = yield take(EVEAPI.ACCESS);
    yield call(handleEveApiAccess, authToken);
}