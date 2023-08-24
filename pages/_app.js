import "@/styles/globals.css";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${openSans.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
