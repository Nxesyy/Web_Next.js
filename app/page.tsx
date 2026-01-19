import Image from "next/image";
import Galaxy from "./component/Galaxy";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
      </div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Galaxy />
</div>
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-start justify-start pt-80 px-26 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
              Hi, Saya Gesang
            </h1>
            <h2 className="typing-text text-2xl text-gray-700 dark:text-gray-300">
              I'm a <span className="font-bold">FullStack Developer</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Saya adalah seorang Full Stack Developer yang memiliki ketertarikan dalam membangun aplikasi web secara menyeluruh, mulai dari sisi frontend hingga backend. Saya terbiasa mengembangkan antarmuka yang responsif dan user-friendly, serta merancang sistem backend yang efisien dan terstruktur.
          </p>
        </div>
        <div className="mt-12 flex flex-col px-50 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-3 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[142px]"
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
            Hire Me
          </a>
        </div>
      </main>
    </div>
  );
}