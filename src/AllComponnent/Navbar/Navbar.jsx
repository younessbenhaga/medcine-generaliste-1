import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import menu from "./align-right-svgrepo-com.svg";
import close from "./close-circle-svgrepo-com.svg";
import logo from "./logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="py-5 w-full fixed top-0 bg-white z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} className="w-10 mx-2" alt="logo" />
            <h2 className="text-black font-bold text-lg">Doctor</h2>
          </div>
          <div className="hidden md:flex items-center space-x-4 roboto-bold">
            <Link
              to="accueil-section"
              spy={true}
              smooth={true}
              duration={500}
              className="text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link
              to="services-section"
              spy={true}
              smooth={true}
              duration={500}
              className="text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="cabinet-section"
              spy={true}
              smooth={true}
              duration={500}
              className="text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Cabinet
            </Link>
            <Link
              to="medecin-section"
              spy={true}
              smooth={true}
              duration={500}
              className="text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Médecin
            </Link>
            <Link
              to="lieu-horaire-section"
              spy={true}
              smooth={true}
              duration={500}
              className="text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Lieu Horaire
            </Link>
            <Link
              to="rendez-vous-section"
              spy={true}
              smooth={true}
              duration={500}
              className="text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Rendez-Vous
            </Link>
            <Link
              to="contact-section"
              spy={true}
              smooth={true}
              duration={500}
              className="text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            {isOpen ? (
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
              >
                <img src={close} className="w-6 h-6" alt="menu" />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className="text-white focus:outline-none"
              >
                <img src={menu} className="w-6 h-6" alt="menu" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition duration-300 ease-out"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={menuRef}
            className="md:hidden w-full fixed bg-white shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 roboto-medium">
              <Link
                to="accueil-section"
                spy={true}
                smooth={true}
                duration={500}
                className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
                onClick={closeMenu}
              >
                Accueil
              </Link>
              <Link
                to="services-section"
                spy={true}
                smooth={true}
                duration={500}
                className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="cabinet-section"
                spy={true}
                smooth={true}
                duration={500}
                className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
                onClick={closeMenu}
              >
                Cabinet
              </Link>
              <Link
                to="medecin-section"
                spy={true}
                smooth={true}
                duration={500}
                className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
                onClick={closeMenu}
              >
                Médecin
              </Link>
              <Link
                to="lieu-horaire-section"
                spy={true}
                smooth={true}
                duration={500}
                className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
                onClick={closeMenu}
              >
                Lieu Horaire
              </Link>
              <Link
                to="rendez-vous-section"
                spy={true}
                smooth={true}
                duration={500}
                className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
                onClick={closeMenu}
              >
                Rendez-Vous
              </Link>
              <Link
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
                className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
