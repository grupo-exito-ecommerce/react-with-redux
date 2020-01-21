import { Loading } from '@shared/index';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';
import { fetchCharacters, selectCharacters } from './redux';

export const Characters: FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharacters.request());
  }, []);

  return characters ? (
    <Page characters={characters} />
  ) : (
    <Loading fix mainStyles={{ background: 'rgba(40, 44, 52, 0.2)' }} />
  );
};
