import { all } from 'redux-saga/effects';

import eveApiAccessSaga from './eveApiAccessSaga';

export default function* rootSaga() {
    yield all([eveApiAccessSaga()]);
}