import config from '@src/config';

export interface ApiResponse<T> {
  results: T;
}

export const getAllCharacters = async () => {
  try {
    const res = await fetch(`${config.API_URL}/character`);
    const { results = [] }: ApiResponse<any[]> = await res.json();
    return results;
  } catch (err) {
    console.error('The list of character of the api could not be consulted.', err);
    return [];
  }
};
