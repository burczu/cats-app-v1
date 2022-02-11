import { ICatsHook } from './types';
import { useCatsContext } from '@context/cats';
import { ICat } from '@services/cats/types';

export const useCats = (): ICatsHook => {
  const { setCats } = useCatsContext();

  const initCats = (initialValue: ICat[]) => {
    setCats(initialValue);
  };

  return {
    initCats,
  };
};
