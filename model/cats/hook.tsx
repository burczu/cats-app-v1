import { ICatsHook } from './types';
import { useCatsContext } from '../../context/cats';

const useCats = (): ICatsHook => {
  const { setCats } = useCatsContext();

  const initCats = (initialValue: any[]) => {
    setCats(initialValue);
  };

  return {
    initCats,
  };
};

export default useCats;
