"use client";

import Background from "./background";

export default function Home() {
  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 -z-10">
        <Background />
      </div>
      <main className="container mx-auto min-h-full flex">
        <div className="flex-grow">
          <div className="prose prose-zinc dark:prose-invert bg-zinc-100/[.8] dark:bg-zinc-900/[.8] backdrop-blur-xl text-center flex flex-col justify-center h-full mx-auto tracking-widest p-4">
            <h1>Hey, I create stuff.</h1>
            <p>
              At work I develop web applications, using primarily .NET and
              Angular.
            </p>
            <p>
              In my spare time, I enjoy learning about other subjects like game
              development and genetic algorithms.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
