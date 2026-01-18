import Image from "next/image";
import PixelBlast from "./component/PixelBlast";
import Squares from "./component/Squares";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-between py-90 px-26 bg-white dark:bg-black sm:items-start ">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <h1 className="text-5xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50">
            Hi, Saya Gesang
          </h1>
          <h2 className="typing-text text-2xl text-gray-700 dark:text-gray-300">
            Im a <span className="font-bold">FullStack Developer</span>
          </h2>
          <p className="max-w-md text-lg font-semibold leading-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ea quisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-base font-medium sm:flex-row ">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
