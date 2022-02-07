import { get } from './index';
import { API_BASE_URL, API_KEY } from '@misc/constants';

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
    const testUrl = '/test123';
    const expectedUrl = `${API_BASE_URL}${testUrl}`;
    const expectedParameter = {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    };

    get(testUrl);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedParameter);
  });
});
