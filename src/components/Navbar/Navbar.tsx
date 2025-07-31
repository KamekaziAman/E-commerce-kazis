import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="w-full bg-black text-gray-400 py-1 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 flex items-center justify-between">
      <div className="flex items-center gap-4 text-lg">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <div className="flex space-x-4 text-sm sm:text-base">
        <span className="cursor-pointer hover:text-white transition">
          Contact
        </span>
        <span className="cursor-pointer hover:text-white transition">FAQ</span>
        <span className="cursor-pointer hover:text-white transition">
          Support
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
