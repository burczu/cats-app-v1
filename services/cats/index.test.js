import { getCats } from './index';
import { get } from '@misc/fetch';

describe('cats service', () => {
  describe('when getting cats', () => {
    it('should call get method with correct parameters', () => {
      const expectedParameter = '/breeds';

      getCats();
      expect(get).toHaveBeenCalledWith(expectedParameter);
    });
  });
});
