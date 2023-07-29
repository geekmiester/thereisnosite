import Typewriter, { TypewriterClass } from "typewriter-effect";
import React, { useRef, useState } from "react";

interface Props {}

import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({ weight: "400", subsets: ["latin"] });

export const Intro: React.FunctionComponent<Props> = (props) => {
  const [isConfirmVisible, setConfirmVisible] = useState(false);
  const writerRef = useRef<TypewriterClass>();
  const [counter, setCounter] = useState(0);
  const [isNoVisible, setNoVisible] = useState(true);
  const [isEmailVisible, setEmailVisible] = useState(false);
  const [isOfcourseNoVisible, setOfcourseNoVisible] = useState(true);

  // const playerRef = useRef<HTMLAudioElement>(null);

  const counterHandler = (writer: TypewriterClass | undefined) => {
    if (counter === 0) {
      writer?.deleteAll(1).start();
    }

    if (counter === 3) {
      writer
        ?.pauseFor(900)
        .deleteAll(10)
        .typeString("Alright.......")
        .pauseFor(800)
        .deleteAll()
        // .callFunction(() => {
        //   playerRef.current!.volume = 0.2;
        //   playerRef.current?.play();
        // })
        .typeString("Loading the website... ")
        .typeString("3")
        .pauseFor(1000)
        .deleteChars(1)
        .typeString("2")
        .pauseFor(800)
        .deleteChars(1)
        .typeString("1")
        .pauseFor(800)
        .deleteAll(1)
        // .callFunction(() => {
        //   playerRef.current?.pause();
        // })
        .typeString("Just Kidding")
        .pauseFor(800)
        .deleteAll(0)
        .typeString("There is no site :)")
        .callFunction(() => {
          setEmailVisible(true);
        })
        .pauseFor(4000)
        .deleteAll(0)
        .typeString("Why?")
        .pauseFor(800)
        .deleteAll(0)
        .typeString("There is no reason.")
        .start();
      setConfirmVisible(false);
    } else {
      writer?.typeString("Really ? ").start();
    }
  };

  const YesComp = (
    <button
      className="border-white border-2 hover:bg-white hover:text-black px-5 pt-1 text-lg"
      onClick={() => {
        const writer = writerRef.current;
        setCounter((count) => count + 1);
        setTimeout(() => counterHandler(writer));
      }}
    >
      Yes
    </button>
  );

  return (
    <div
      className={`flex justify-center items-center w-full h-screen flex-col ${specialElite.className}`}
    >
      {/* <audio ref={playerRef}>
        <source src="/wait.mp3" />
      </audio> */}

      <h2 className={`text-4xl p-4`}>
        <Typewriter
          onInit={(typewriter) => {
            writerRef.current = typewriter;
            typewriter
              .changeDeleteSpeed(10)
              .changeDelay(80)
              .typeString("There is no site")
              .pauseFor(1200)
              .deleteChars(7)
              .typeString("really no site")
              .pauseFor(3000)
              .deleteAll()
              .typeString("Why are you still here")
              .pauseFor(2000)
              .typeString("?")
              .pauseFor(700)
              .typeString("?")
              .pauseFor(600)
              .typeString("?")
              .pauseFor(500)
              .typeString("?")
              .pauseFor(400)
              .typeString("?")
              .pauseFor(300)
              .typeString("?")
              .pauseFor(200)
              .typeString("?")
              .pauseFor(100)
              .typeString("?")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Do you really want it so bad?")
              .pauseFor(400)
              .callFunction(() => {
                setConfirmVisible(true);
              })
              .start();
          }}
        />
      </h2>
      {isConfirmVisible && (
        <div className="absolute pt-40 flex gap-10">
          {YesComp}
          {isNoVisible ? (
            <button
              className="border-white border-2 hover:bg-white hover:text-black px-5 pt-1 text-lg "
              onClick={() => setNoVisible(false)}
            >
              No
            </button>
          ) : (
            YesComp
          )}
          {isOfcourseNoVisible ? (
            <button
              className="border-white border-2 hover:bg-white hover:text-black px-5 pt-1 text-lg"
              onClick={() => setOfcourseNoVisible(false)}
            >
              Of course not
            </button>
          ) : (
            YesComp
          )}
        </div>
      )}
      {isEmailVisible && (
        <a
          className="border-white border-2 hover:bg-white hover:text-black px-5 pt-1 text-lg cursor-pointer"
          href="mailto:thereisno.co@gmail.com"
        >
          There is no email
        </a>
      )}
    </div>
  );
};
