import { get } from './index';
import { API_KEY } from '@misc/constants';

describe('fetch wrapper', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          json: () => null,
        });
      });
    });
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('should call fetch with correct parameters', () => {
    const expectedUrl = 'test123';
    const expectedParameter = {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    };

    get(expectedUrl);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedParameter);
  });
});
