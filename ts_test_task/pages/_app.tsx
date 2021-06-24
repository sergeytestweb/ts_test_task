import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <title>ts_test_task</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
    <Component {...pageProps} />
  </>;
}

export default MyApp;
