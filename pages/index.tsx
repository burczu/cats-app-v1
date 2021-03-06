import React, { useEffect } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { IHomePageProps } from './types';
import { useCats } from '@model/cats';
import { getCats } from '@services/cats';
import Cats from '@components/cats';

const Home: NextPage<IHomePageProps> = ({ cats }) => {
  const { initCats } = useCats();

  useEffect(() => {
    initCats(cats);
  }, [cats, initCats]);

  return <Cats />;
};

export const getServerSideProps: GetServerSideProps<
  IHomePageProps
> = async () => {
  const cats = await getCats();

  return {
    props: {
      cats,
    },
  };
};

export default Home;
