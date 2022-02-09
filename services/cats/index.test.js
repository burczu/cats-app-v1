import { getCats } from './index';
import { get } from '@misc/fetch';
import { DEFAULT_LIST_LIMIT, DEFAULT_LIST_PAGE } from '@misc/constants';

describe('cats service', () => {
  describe('when getting first page of cats list', () => {
    it('should call get method with correct default parameters', () => {
      const expectedParameter = `/breeds?page=${DEFAULT_LIST_PAGE}&limit=${DEFAULT_LIST_LIMIT}`;

      getCats();
      expect(get).toHaveBeenCalledWith(expectedParameter);
    });
  });

  describe('when getting other page of cats list', () => {
    const expectedPage = 12;
    const expectedParameter = `/breeds?page=${expectedPage}&limit=${DEFAULT_LIST_LIMIT}`;

    getCats(expectedPage);
    expect(get).toHaveBeenCalledWith(expectedParameter);
  });
});
