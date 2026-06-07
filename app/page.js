export default function Home() {
  const name = "รณพีร์ ปั้นตระกูล";

  return (
    <main className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300">
      <div className="text-center text-white px-4">
        <div className="mx-auto mb-6 text-9xl">🐴</div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80 mb-4">portfolio</p>
        <h1 className="text-6xl font-bold mb-2">{name}</h1>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-90 mb-4">digital business technology thonburi commercial college</p>
        <p className="text-xl">Web Developer · Bangkok</p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-red-600 shadow-lg shadow-black/20 transform transition hover:scale-105 hover:bg-red-50">
            ดู Projects
          </button>
          <button className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transform transition hover:scale-105 hover:bg-zinc-900">
            Contact
          </button>
        </div>
      </div>
    </main>
  );
}
