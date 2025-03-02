import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-l from-teal-500 via-blue-500 text-black shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition duration-300">
            FyzWeb
          </div>
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Gallery", "feedback", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="relative text-white cursor-pointer after:block after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:text-blue-400"
              >
                {item}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 w-40 h-65 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          {["Home", "About", "Gallery", "feedback", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className=" text-white text-lg font-semibold cursor-pointer hover:text-blue-400 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
