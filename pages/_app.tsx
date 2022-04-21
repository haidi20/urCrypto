import Head from "next/head";
import { AppProps } from 'next/app';
import React, {useState} from "react";

import 'styles/globals.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>urCrypto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
