import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50 flex justify-center">
      <nav className="w-full max-w-4xl px-6 py-4 montserrat-medium">
        <ul className="flex justify-around items-center">
          <li>
            <Link to="/" className={`flex flex-col items-center justify-center text-sm ${isActive("/") ? "text-black" : "text-gray-500"}`}>
              <HomeOutlinedIcon fontSize="small" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`flex flex-col items-center justify-center text-sm ${isActive("/contact") ? "text-black" : "text-gray-500"}`}>
              <AddIcCallOutlinedIcon fontSize="small" />
              Contact
            </Link>
          </li>
          <li>
            <Link to="/orders" className={`flex flex-col items-center justify-center text-sm ${isActive("/orders") ? "text-black" : "text-gray-500"}`}>
              <ShoppingCartOutlinedIcon fontSize="small" />
              Orders
            </Link>
          </li>
          <li>
            <Link to="/about" className={`flex flex-col items-center justify-center text-sm ${isActive("/about") ? "text-black" : "text-gray-500"}`}>
              <InfoOutlinedIcon fontSize="small" />
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
