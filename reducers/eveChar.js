import { EVEAPI } from '../constants';

const setChar = (state = {}, action) => {
  if (action.type === EVEAPI.SET_CHAR_ID) {
    return { id: action.id, name: action.name };
  }

  return state;
};

export default setChar;
