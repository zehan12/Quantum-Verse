export default function Home() {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        <header className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="md:text-6xl">
              ⏳
            </div>
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl text-inter font-bold text-transparent md:text-7xl">
              Quantum Verse
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Step into the Quantum Verse — Witness technology through the eyes of time
          </p>
        </header>
      </main>
    </>
  );
}
