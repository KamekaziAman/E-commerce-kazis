import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function BottomNavbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className="py-1 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 flex items-center justify-between text-white">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div>
          <nav>
            <ul className="flex space-x-4 text-black font-instrument text-2xl">
              <li>
                <a href="/">SHOP</a>
              </li>
              <li className="relative">
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
                  <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-10">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/collections/summer">Summer</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/collections/winter">Winter</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/collections/festive">Festive</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="/men">MEN</a>
              </li>
              <li>
                <a href="/women">WOMEN</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
