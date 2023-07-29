import Image from "next/image";
import { Inter, Special_Elite, Outfit } from "next/font/google";
import { Intro } from "@/components/molecules";
import { useEffect } from "react";
import Head from "next/head";
import { Nav } from "@/components/molecules/Nav";

// const inter = Special_Elite({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    console.log(
      "Fancy Seeing you here ( ͡° ͜ʖ ͡°). Feel free to take a peek ┤ ͜ʖ ͡°)"
    );
  }, []);

  return (
    <>
      <Head>
        <title>Thereisno</title>
      </Head>
      <main className={`${outfit.className} bg-dark h-full`}>
        <Intro />
        {/* <Nav></Nav> */}
      </main>
    </>
  );
}
