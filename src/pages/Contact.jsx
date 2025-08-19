import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      <header className="w-full p-5 flex items-center justify-between">
        <div className="text-2xl md:text-3xl">🌸 HINARI</div>
        <div className="flex gap-4 justify-center items-center">
          <Link to="/orders">
            <button className="w-[124px] py-2 bg-blue-500 text-white rounded-full">Order</button>
          </Link>
        </div>
      </header>

      <main className="flex flex-col gap-10 justify-center w-full p-5 mt-6 md:px-8 pb-36 md:pb-24">
        {/* Contact Title */}
        <h1 className="montserrat-bold text-4xl text-center text-[#b63d52]">Contact Us</h1>

        {/* Contact Section */}
        <section className="flex flex-row items-center justify-center gap-[15px] max-w-[900px] mx-auto w-full">
          {/* Contact Info */}
          <div className="flex flex-col gap-5 text-lg">
            <p className="flex items-center gap-2">
              <img src="/telegram.png" alt="telegram" className="w-16" />
              <span className="text-[14px] md:text-[20px]">
                <strong>Telegram:</strong> @hinari_anime
              </span>
            </p>
            <p className="flex items-center gap-2">
              <img src="/instagram.png" alt="instagram" className="w-16" />
              <span className="text-[14px] md:text-[20px]">
                <strong>Instagram:</strong> @hinari_anime
              </span>
            </p>
            <p className="flex items-center gap-2">
              <img src="/tiktok.png" alt="tiktok" className="w-16" />
              <span className="text-[14px] md:text-[20px]">
                <strong>Tiktok:</strong> @hinari_anime
              </span>
            </p>
          </div>

          {/* Naruto Image */}
          <div className="w-32 sm:w-44 md:w-60 rounded-2xl overflow-hidden flex-shrink-0">
            <img src="/naruto.png" alt="naruto" className="w-full h-full object-contain" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="text-center max-w-xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">
            <span className="text-red-500 text-2xl mr-1">❓</span> FAQ (Frequently Asked Questions)
          </h2>

          <div className="text-left space-y-4 text-sm sm:text-base">
            <div>
              <p className="font-semibold">Q: How do I order?</p>
              <p>A: Choose your items, copy their codes, and send them via Telegram.</p>
            </div>
            <div>
              <p className="font-semibold">Q: When will I get my order?</p>
              <p>A: We deliver twice a week. You’ll be notified after you order.</p>
            </div>
            <div>
              <p className="font-semibold">Q: Can I buy multiple items at once?</p>
              <p>A: Yes! Send us all the codes together.</p>
            </div>
            <div>
              <p className="font-semibold">Q: Do you accept returns?</p>
              <p>A: Sorry, no returns. Please double-check before ordering.</p>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="text-center mt-10">
          <h3 className="text-xl font-bold mb-2">Need Help?</h3>
          <p className="mb-4">we are here to help @Harnis🌸</p>
          <img src="/luffy.png" alt="luffy" className="mx-auto w-32 sm:w-44 md:w-52 object-contain" />
        </section>
      </main>
    </div>
  );
}

export default Contact;
