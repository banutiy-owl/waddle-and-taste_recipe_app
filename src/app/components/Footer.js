import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Waddle and Taste. All rights reserved.</p>
        <p className="mt-4">Follow us on:</p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <a href="#" className="hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6"/> 
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6"/>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
