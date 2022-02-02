import { Dispatch, SetStateAction } from 'react';

export interface ICatsContext {
  cats: any[];
  setCats: Dispatch<SetStateAction<any[]>>;
}
