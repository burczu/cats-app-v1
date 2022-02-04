import { ICatsHook } from './types';
import { useCatsContext } from '@context/cats';

export const useCats = (): ICatsHook => {
  const { setCats } = useCatsContext();

  const initCats = (initialValue: any[]) => {
    setCats(initialValue);
  };

  return {
    initCats,
  };
};
