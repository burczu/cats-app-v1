import { get } from '@misc/fetch';
import { DEFAULT_LIST_PAGE, DEFAULT_LIST_LIMIT } from '@misc/constants';

export const getCats = async (page = DEFAULT_LIST_PAGE) => {
  return await get(`/breeds?page=${page}&limit=${DEFAULT_LIST_LIMIT}`);
};
