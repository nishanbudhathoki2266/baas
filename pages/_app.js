import Layout from "@/components/Layout";
import "@/styles/globals.css";

import { Open_Sans } from "next/font/google";
import Head from "next/head";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Baas | Your Shelter.</title>
        <meta
          name="description"
          content="Baas - The best residence booking platform in Nepal."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} className={`${openSans.variable}`} />
    </Layout>
  );
}
