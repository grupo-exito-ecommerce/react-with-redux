import { Character } from '@shared/index';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { fetchCharacters } from './actions';

const all = createReducer<Character[]>([]).handleAction(
  fetchCharacters.success,
  (_, { payload }) => payload
);
export default combineReducers({
  all
});
