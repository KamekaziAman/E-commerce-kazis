import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faTimes,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

export default function BottomNavbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="py-2 px-4 sm:px-6 md:px-10 lg:px-32 xl:px-80 flex items-center justify-between bg-white shadow-md">
        <div>
          <a href="/">
            <img src="/images/logo.png" alt="logo" className="h-10" />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-black text-2xl"
            />
          </button>
        </div>

        {/* Nav Menu */}
        <div
          className={`absolute md:static top-24 left-0 w-full md:w-auto bg-white md:bg-transparent z-20 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <nav>
            <ul className="flex flex-col md:flex-row md:space-x-6 text-black font-instrument text-[18px] md:text-2xl px-4 md:px-0">
              <li className="py-2 md:py-0">
                <a href="/">SHOP</a>
              </li>
              <li className="relative py-2 md:py-0">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 cursor-pointer transition"
                >
                  COLLECTIONS
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="md:absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-30 md:mt-1 overflow-hidden">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-t-lg">
                      <a href="/collections/summer">Summer</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/collections/winter">Winter</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-b-lg">
                      <a href="/collections/festive">Festive</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-2 md:py-0">
                <a href="/men">MEN</a>
              </li>
              <li className="py-2 md:py-0">
                <a href="/women">WOMEN</a>
              </li>
              <li className="py-2 md:py-0">
                <button className="text-black hover:text-gray-600 transition-colors duration-200">
                  <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-700 cursor-pointer" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
