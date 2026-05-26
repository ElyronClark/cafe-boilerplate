import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b px-8 py-4">
            <Link href="/" className="text-2xl font-bold whitespace-nowrap">
                The Daily Grind Cafe
            </Link>
            <nav className="flex gap-4">
                <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                <Link href="/menu" className="text-blue-600 hover:underline">Menu</Link>
                <Link href="/about" className="text-blue-600 hover:underline">About</Link>
            </nav>
        </header>
    );
}