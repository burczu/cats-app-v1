import React, { createContext, useContext, FC, useState } from 'react';
import { ICatsContext } from './types';
import { getUseContext } from '@misc/helpers/context';
import { ICat } from '@services/cats/types';

const CatsContext = createContext<ICatsContext | undefined>(undefined);

export const useCatsContext = getUseContext<ICatsContext>(
  CatsContext,
  useContext,
);

const CatsContextProvider: FC = ({ children }) => {
  const [cats, setCats] = useState<ICat[]>([]);

  return (
    <CatsContext.Provider
      value={{
        cats,
        setCats,
      }}
    >
      {children}
    </CatsContext.Provider>
  );
};

export default CatsContextProvider;
