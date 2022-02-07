import { get } from '@misc/fetch';

export const getCats = async () => {
  return await get('/breeds');
};
