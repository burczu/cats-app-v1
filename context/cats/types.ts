import { Dispatch, SetStateAction } from 'react';
import { ICat } from '@services/cats/types';

export interface ICatsContext {
  cats: ICat[];
  setCats: Dispatch<SetStateAction<any[]>>;
}
