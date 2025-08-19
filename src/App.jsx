import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
