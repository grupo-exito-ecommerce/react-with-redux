import { Character, getAllCharacters } from '@shared/index';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCharacters } from './actions';

function* getCharacterList(): Generator<any, any, Character[]> {
  try {
    const data = yield call(getAllCharacters);
    yield put(fetchCharacters.success(data));
  } catch (err) {
    yield put(fetchCharacters.failure(err));
  }
}

export default [takeLatest(fetchCharacters.request, getCharacterList)];
