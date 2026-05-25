import Link from "next/link";

export default function Header() {
    return (
        <header className="mb-8">
            <h1 className="text-4xl font-bold">The Daily Grind Care</h1>
            <nav className="mt-2 flex gap-4">
                <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                <Link href="/menu" className="text-blue-600 hover:underline">Menu</Link>
            </nav>
        </header>
    );
}