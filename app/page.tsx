"use client";

import Background from "./background";

export default function Home() {
  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 -z-10">
        <Background />
      </div>
      <main className="container mx-auto min-h-full flex">
        <div className="flex flex-col justify-center mx-auto md:bg-zinc-100/[.8] md:dark:bg-zinc-900/[.8] md:backdrop-blur-xl">
          <div className="prose prose-zinc dark:prose-invert text-center tracking-widest bg-zinc-100/[.8] dark:bg-zinc-900/[.8] md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-4">
            <h1>Hey, I build stuff.</h1>
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
