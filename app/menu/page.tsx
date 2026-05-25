import Header from "../Header";
import Footer from "../Footer";


export default function Menu() {
    return(
        <main className="max-w-2xl mx-auto p-8">
            <Header />
            <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>
            <p className="text-gray-600">Espresso - $3</p>
            <p className="text-gray-600">Pour Over - $4</p>
            <p className="text-gray-600">Croissant - $3.50</p>
            <Footer />
        </main>
    );
}