import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import CatsContextProvider from '@context/cats';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Cats App v1.0</title>
      <meta
        name="description"
        content="Cats App is pet project to test some new things..."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CatsContextProvider>
      <main>
        <h1>Cats App v1.0</h1>
        <Component {...pageProps} />
      </main>
    </CatsContextProvider>
  </>
);

export default CustomApp;
