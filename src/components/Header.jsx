import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <h1 className="text-sm md:text-4xl uppercase bg-darkBlue py-3 px-8 text-white">
            Simple trivia game
          </h1>
        </div>
        <div className=" space-x-6 md:flex">
          <Link className="hover:text-darkGrayishBlue" to="/">
            Home
          </Link>
          <Link className="hover:text-darkGrayishBlue" to="/settings">
            Settings
          </Link>

          <Link className="hover:text-darkGrayishBlue" to="/about">
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
