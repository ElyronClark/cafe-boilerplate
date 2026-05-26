export default function Menu() {
    return(
        <main>
            <h1 className="text-4xl font-semibold mb-4">Our Menu</h1>
            <section className="mb-10">
                <div className="flex justify-between items-baseline border-b pb-2 mb-4">
                    <h2 className="text-2xl font-semibold">Coffee</h2>
                    <span className="text-2xl font-semibold">Price</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Espresso</span>
                    <span>$3</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Double Shot</span>
                    <span>$5</span>
                </div>            <div className="flex justify-between mb-2">
                    <span>Flat White</span>
                    <span>$10</span>
                </div>            
                <div className="flex justify-between mb-2">
                    <span>Irish Coffee</span>
                    <span>$10</span>
                </div>
            </section>
            <section className="mb-10">
                <h2 className="text-2xl font-semibold border-b pb-2 mt-4 mb-4">Pastries</h2>
                <div className="flex justify-between mb-2">
                    <span>Muffin</span>
                    <span>$5</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Cookie</span>
                    <span>$3</span>
                </div>
            </section>
            
        </main>
    );
}