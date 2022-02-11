import React, { FC } from 'react';
import { useCats } from '@model/cats';

const Cats: FC = () => {
  const { cats } = useCats();

  return <ul>{cats && cats.map((cat) => <li key={cat.id}>{cat.name}</li>)}</ul>;
};

export default Cats;
