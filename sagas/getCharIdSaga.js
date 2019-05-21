import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';

import { EVEAPI } from '../constants';
import { fetchCharId } from '../api';

export const getAuthToken = state => state.authToken;

export function* handleGetCharId(authToken) {
  try {
    yield console.log('Char Start');
    
    // const authToken = yield select(getAuthToken);
    yield console.log(`Der Auth Token: ${authToken}`);
    
    const char = yield call(fetchCharId, authToken);
    yield console.log(char);
    
    yield put({
      type: EVEAPI.SET_CHAR_ID,
      id: char.CharacterID,
      name: char.CharacterName,
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* watchGetCharIdSaga() {
  yield console.log('watcher');
  
  yield takeEvery('GET_CHAR_ID', handleGetCharId);
}
