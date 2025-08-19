import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryCard from "../components/CategoryCard.jsx";
import ProductCard from "../components/ProductCard.jsx";
import products from "../data/Product";
import { Link } from "react-router-dom";

function Home() {
  const [filterKey, setFilterKey] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleCategoryClick = (key) => {
    setFilterKey(key);
    setVisibleCount(6); // Reset pagination on category change
  };

  const filteredProducts = filterKey === "all" ? products : products.filter((product) => product.type === filterKey);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div>
      <header className="w-full p-5 flex items-center justify-between">
        <div className="text-2xl md:text-3xl">🌸 HINARI</div>
        <div className="flex gap-4 justify-center items-center">
          <Link to="/orders">
            <button className="w-[124px] py-2 bg-blue-500 text-white rounded-full">Order</button>
          </Link>
          <Link to="/contact">
            <button className="w-[124px] py-2 bg-gray-200 rounded-full">Contact Us</button>
          </Link>
        </div>
      </header>

      <main className="flex flex-col gap-5 justify-center w-full p-5 mt-9 md:px-8 pb-24">
        <section className="mb-8 text-center">
          <img src="/hinata.png" alt="hinata" className="w-32 mx-auto mb-4 md:w-72" />
          <h1 className="text-xl montserrat-medium">Anime Treasures for True Fans</h1>
          <p>Cute keychains, cozy clothes, and dreamy notebooks made with love and anime spirit 💖</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl montserrat-bold">Our Products 📦</h2>
        </section>

        <section className="mb-8 flex flex-col justify-center gap-5 md:flex-row">
          <div onClick={() => handleCategoryClick("notebook")} className="cursor-pointer">
            <CategoryCard title="NoteBook" img="/note.jpg" inputs={["Tiny", "Medium"]} />
          </div>
          <div onClick={() => handleCategoryClick("cloth")} className="cursor-pointer">
            <CategoryCard title="Clothes" img="/Clothes.jpg" inputs={["Hoodie", "T-shirt", "Sweater"]} />
          </div>
          <div onClick={() => handleCategoryClick("key")} className="cursor-pointer">
            <CategoryCard title="Keychains" img="/key.jpg" inputs={["Rectangle", "with Shape"]} />
          </div>
        </section>

        <section className="mb-8 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl w-full justify-items-center">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} title={product.title} img={product.img} />
            ))}
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-4">
              <button onClick={() => setVisibleCount((prev) => prev + 6)} className="text-sm px-4 py-2 bg-pink-200 rounded-full">
                Load More
              </button>
            </div>
          )}
        </section>

        <section className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Link to="/orders">
            <button className="w-[124px] py-2 bg-blue-500 text-white rounded-full">Order</button>
          </Link>
          <Link to="/contact">
            <button className="w-[124px] py-2 bg-gray-200 rounded-full">Contact Us</button>
          </Link>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <ShoppingCartIcon /> How to Order
          </h2>
          <ol className="list-decimal list-inside mt-2">
            <li>Browse the products.</li>
            <li>Screenshot the items you want.</li>
            <li>Click the order button — it will redirect you to our Telegram.</li>
            <li>Send the screenshot and your desired size/shape to us on Telegram.</li>
            <li>We confirm and deliver to your door!</li>
          </ol>
        </section>

        <section className="mb-8 mt-8">
          <h2 className="text-3xl montserrat-bold">Why Choose Us? 🌟</h2>
          <p>We bring you the cutest anime merch, crafted with love and attention to detail. Our products are designed to make your everyday life a little more magical!</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
