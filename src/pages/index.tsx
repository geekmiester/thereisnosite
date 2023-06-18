import Image from "next/image";
import { Inter, Special_Elite } from "next/font/google";
import { Intro } from "@/components/molecules";
import { useEffect } from "react";

const inter = Special_Elite({ weight: "400", subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    console.log(
      "Fancy Seeing you here ( ͡° ͜ʖ ͡°). Feel free to take a peek ┤ ͜ʖ ͡°)"
    );
  }, []);

  return (
    <main className={`${inter.className}`}>
      <Intro />
    </main>
  );
}
