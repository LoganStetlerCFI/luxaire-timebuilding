export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-slate-950">
      <header className="flex items-center justify-between px-6 py-6 sm:px-12">
        <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          TXT Aviation
        </span>
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 sm:flex">
          <span>Instructor Portal</span>
          <span>Student Portal</span>
          <span>Contact</span>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          Flight Training School
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
          TXT Aviation
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Building safe, skilled, and confident pilots — from first solo to
          advanced ratings.
        </p>
        <div className="mt-10 rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
          Site under construction
        </div>
      </main>

      <footer className="px-6 py-8 text-center text-sm text-slate-400 dark:text-slate-600">
        © {new Date().getFullYear()} TXT Aviation. All rights reserved.
      </footer>
    </div>
  );
}
