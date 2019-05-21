import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const isServer = typeof window === 'undefined';
const sagaMiddleware = createSagaMiddleware();

const saveToLocalStore = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    if (!isServer) {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) return {};
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = (initialState) => {
  const persistedState = loadFromLocalStorage();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  // if (!isServer)
  //   store.subscribe(() => saveToLocalStore(store.getState()));
  return store;
};

export default configureStore;
