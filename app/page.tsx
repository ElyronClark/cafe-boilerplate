import Link from "next/link";


export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center text-center py-20">
        <h1 className="text-4xl font-bold">The Daily Grind Cafe</h1>
        <p className="text-2xl text-stone-700 mb-8">
          Fresh coffee and pastries, every morning.
        </p>
        <Link href="/menu"className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800">
        View Our Menu
        </Link>
      </section>
    </main>
  );
}