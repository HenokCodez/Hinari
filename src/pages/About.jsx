import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      {/* Header */}
      <header className="w-full p-5 flex items-center justify-between">
        <div className="text-2xl md:text-3xl">🌸 HINARI</div>
        <div className="flex gap-4 justify-center items-center">
          <Link to="/orders">
            <button className="w-[124px] py-2 bg-blue-500 text-white rounded-full">Order</button>
          </Link>
          <Link to="/contact">
            <button className="w-[124px] py-2 bg-gray-200 rounded-full">Contact Us</button>
          </Link>{" "}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 px-5 py-8 text-center max-w-3xl mx-auto pb-36">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>

        {/* Logo and Image */}
        <div className="flex flex-row items-center justify-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">🌸 HINARI</h2>
          <img src="/hinata2.png" alt="Hinari anime mascot" className="w-28 sm:w-36 object-contain" />
        </div>

        {/* Who We Are */}
        <section className="text-left w-full space-y-6 text-base sm:text-lg leading-relaxed">
          <div>
            <h3 className="font-semibold mb-1">🧍 Who We Are</h3>
            <p>We’re two anime-loving girls from Ethiopia who turned our love for anime into a little business! We create anime-themed products for fans like you.</p>
          </div>

          {/* Why We Started */}
          <div>
            <h3 className="font-semibold mb-1">Why We Started</h3>
            <p>We’ve always wished for more anime merch that feels personal and affordable. So, we decided to start our own store — made by fans, for fans.</p>
          </div>

          {/* What Makes Us Special */}
          <div>
            <h3 className="font-semibold mb-2">What Makes Us Special</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>💖 Cute and original designs</li>
              <li>📱 Simple ordering through Telegram</li>
              <li>💸 Affordable prices</li>
              <li>🚚 Fast local delivery</li>
              <li>🎌 Made with love by real anime lovers!</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
