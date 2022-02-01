import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cats App v1.0</title>
        <meta
          name="description"
          content="Cats App is pet project to test some new things..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Cats App v1.0</h1>
      </main>
    </div>
  );
};

export default Home;
