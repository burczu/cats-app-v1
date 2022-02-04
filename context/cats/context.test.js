import React from 'react';
import { render } from '@testing-library/react';
import CatsContextProvider, { useCatsContext } from './context';

const setup = () => {
  const returnValue = {};

  const TestComponent = () => {
    Object.assign(returnValue, useCatsContext());
    return null;
  };

  render(
    <CatsContextProvider>
      <TestComponent />
    </CatsContextProvider>,
  );

  return returnValue;
};

describe('cats context', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should throw an error when used without provider', () => {
    const TestComponent = () => {
      useCatsContext();
    };

    // just to suppress console error
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

    expect(() => render(<TestComponent />)).toThrow(Error);
  });

  describe('if used inside the provider', () => {
    let contextData;

    beforeEach(() => {
      contextData = setup();
    });

    it('should provide correct data to the component', () => {
      expect(contextData.hasOwnProperty('cats')).toBe(true);
      expect(contextData.hasOwnProperty('setCats')).toBe(true);

      expect(contextData.cats).toEqual([]);
      expect(typeof contextData.setCats).toEqual('function');
    });
  });
});
