import { API_BASE_URL, API_KEY } from '@misc/constants';

export const get = async (url: string) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'GET',
    headers: {
      'x-api-key': API_KEY,
    },
  });

  return response.json();
};
