import { ICat } from '@services/cats/types';

export interface ICatsHook {
  cats: ICat[];
  initCats: (initialValue: ICat[]) => void;
}
