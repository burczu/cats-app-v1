import React from 'react';
import { render } from '@testing-library/react';
import { useCats } from './hook';
import CatsContextProvider from '../../context/cats'; // actual version
import { useCatsContext } from '@context/cats'; // mocked version

const setup = () => {
  const returnValue = {};

  const TestComponent = () => {
    Object.assign(returnValue, useCats());
    return null;
  };

  render(
    <CatsContextProvider>
      <TestComponent />
    </CatsContextProvider>,
  );

  return returnValue;
};

describe('cats hook', () => {
  let useCatsData;

  beforeEach(() => {
    useCatsData = setup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return initCats function', () => {
    expect(typeof useCatsData.initCats).toBe('function');
  });

  describe('when calling initCats', () => {
    it('should call setCats context method', () => {
      const expectedValue = [{ test: 'test' }];
      const { setCats } = useCatsContext();

      useCatsData.initCats(expectedValue);
      expect(setCats).toHaveBeenCalledWith(expectedValue);
    });
  });
});
