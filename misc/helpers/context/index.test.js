import { getUseContext } from './index';

describe('context helpers', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('when helping in getting use context', () => {
    describe('if passed value is undefined', () => {
      it('should throw an error', () => {
        const fakeContext = { test: 'test' };
        const fakeMethod = () => undefined;

        expect(getUseContext(fakeContext, fakeMethod)).toThrow(Error);
      });
    });

    describe('if passed value is a context', () => {
      const fakeContext = { test: 'context' };

      it('should call passed method with passed context', () => {
        const fakeMethod = jest.fn(() => ({ test: 'test' }));

        getUseContext(fakeContext, fakeMethod)();
        expect(fakeMethod).toHaveBeenCalledWith(fakeContext);
      });

      it('should return correct useContext', () => {
        const expectedValue = { test: 'test' };
        const fakeMethod = () => expectedValue;

        expect(getUseContext(fakeContext, fakeMethod)()).toEqual(expectedValue);
      });
    });
  });
});
