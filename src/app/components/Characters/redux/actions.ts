import { Character } from '@shared/index';
import { createAsyncAction } from 'typesafe-actions';
import * as types from './types';

export const fetchCharacters = createAsyncAction(
  types.FETCH_CHARACTERS_REQUEST,
  types.FETCH_CHARACTERS_SUCCESS,
  types.FETCH_CHARACTERS_FAILURE
)<undefined, Character[], Error>();
