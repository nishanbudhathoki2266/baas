import Layout from "@/components/Layout";
import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import { Open_Sans } from "next/font/google";
import Head from "next/head";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

const progress = new ProgressBar({
  size: 4,
  color: "#A24857",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

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
