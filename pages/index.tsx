import React, { useEffect } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { IHomePageProps } from './types';
import { useCats } from '@model/cats';

const Home: NextPage<IHomePageProps> = ({ cats }) => {
  const { initCats } = useCats();

  useEffect(() => {
    initCats(cats);
  }, [cats, initCats]);

  return (
    <main>
      <h1>Cats App v1.0</h1>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<
  IHomePageProps
> = async () => {
  return {
    props: {
      cats: [{ name: 'inka' }],
    },
  };
};

export default Home;
