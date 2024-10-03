
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaSkype } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-yellow-600 text-white py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          {/* Social Icons Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <ImFacebook2
                  size={30}
                  className="hover:text-blue-500 transition-colors duration-300 ease-in-out"
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <SiLinkedin
                  size={30}
                  className="hover:text-blue-700 transition-colors duration-300 ease-in-out"
                />
              </a>
              <a href="https://skype.com" target="_blank" rel="noopener noreferrer">
                <FaSkype
                  size={30}
                  className="hover:text-blue-400 transition-colors duration-300 ease-in-out"
                />
              </a>
            </div>

            {/* Footer Info */}
            <div className="mt-8 w-full border-t border-gray-600 pt-6 flex flex-col items-center">
              <p className="text-sm text-gray-900">
                &copy; 2024 <span className="text-yellow-200 font-bold">P</span>ortfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
