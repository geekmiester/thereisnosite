import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit } from "next/font/google";

const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${outfit.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
