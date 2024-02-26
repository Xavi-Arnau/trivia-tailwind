import React from "react";

const Header = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="/logo.png" alt="" />
        </div>
        <div className=" space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">
            Settings
          </a>

          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
