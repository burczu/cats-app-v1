import React, { createContext, useContext, FC, useState } from 'react';
import { ICatsContext } from './types';

export const CatsContext = createContext({} as ICatsContext);
export const useCatsContext = () => useContext(CatsContext);

const CatsContextProvider: FC = ({ children }) => {
  const [cats, setCats] = useState<any[]>([]);

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
