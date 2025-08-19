import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Orders() {
  return (
    <div>
      {" "}
      <header className="w-full p-5 flex items-center justify-between">
        <div className="text-2xl md:text-3xl">🌸 HINARI</div>
        <div className="flex gap-4 justify-center items-center">
          <Link to="/contact">
            <button className="w-[124px] py-2 bg-gray-200 rounded-full">Contact Us</button>
          </Link>{" "}
        </div>
      </header>
      <main className="flex flex-col gap-5 justify-center w-full p-5 mt-9 md:px-8 md:pb-24">
        <section className="mb-8 flex gap-3.5 items-center flex-col-reverse md:flex-row text-center md:justify-between max-w-[1500px] mx-auto">
          <div>
            <h2 className="montserrat-bold text-4xl">
              <span className="text-[#b63d52]">HINARI</span> ORDERS
            </h2>
            <p>Shop Your Anime Favorites</p>
          </div>
          <div className="w-64 md:w-96 rounded-2xl overflow-hidden">
            <img src="/gojo.jpeg" alt="gojo" />
          </div>
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
        <section className="mt-8">
          <h2 className="text-xl montserrat-bold flex items-center gap-2">Delivery Information</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Delivery happens twice a week for Adama and once a week for Addis Ababa</li>
            <li>We deliver to your doorstep Anywhere in Ethiopia!</li>
          </ul>
        </section>
        <section class="mt-8 flex flex-col items-center ">
          <a
            href="https://t.me/Hinari_anime1"
            target="_blank"
            rel="noopener noreferrer"
            class="
                text-pink-500          /* Default pink color */
                font-semibold          /* Make the text bold */
                py-3 px-6              /* Padding around the text */
                rounded-lg             /* Rounded corners */
                transition-all         /* Smooth transition for hover/active effects */
                duration-200           /* Duration of the transition */
                ease-in-out            /* Easing function for transition */
                hover:underline        /* Underline on hover */
                hover:text-pink-600    /* Slightly darker pink on hover */
                active:text-gray-500   /* Grayish color on click */
                focus:outline-none     /* Remove default focus outline */
                focus:ring-2           /* Add a ring on focus for accessibility */
                focus:ring-pink-300    /* Pink ring color */
                inline-block           /* Ensure padding and margin work correctly */
            "
          >
            Order Now
          </a>
          <div class="h-72 px-9 rounded-2xl overflow-hidden mx-auto mt-6 ">
            <img src="/hinari3.png" alt="hashira" class="m-0 object-contain" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Orders;
