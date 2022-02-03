import { Context } from 'react';

export const getUseContext =
  <T>(
    value: Context<T | undefined>,
    method: <S>(context: Context<S | undefined>) => S | undefined,
  ) =>
  () => {
    const context = method<T | undefined>(value);

    if (context === undefined) {
      throw new Error(`useContext used outside its provider!`);
    }

    return context;
  };
