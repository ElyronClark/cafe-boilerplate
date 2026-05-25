import Header from "./Header";
import Footer from "./Footer";


export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <Header />
      <p className="text-lg text-gray-600">Fresh coffee and pastries, every morning.</p>

      <h2 className="text-2xl font-semibold mt-8">Our Menu</h2>
      <p className="text-gray-600">Espresso, pour-over, fresh-baked croissants.</p>

      <h2 className="text-2xl font-semibold mt-8">Visit us</h2>
      <p className="text-gray-600">123 Main Street. Open 7am-4pm daily.</p>
      <Footer />
    </main>
  );
}