import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-4   z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src="/imagens/logo nav.png" alt="Logo" className="h-20" />

        {/* Menu Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-white font-medium">
            <li>
              <a href="#Servicos" className="hover:text-gray-600">
                Nossos serviços
              </a>
            </li>
            <li>
              <a href="#Sobre" className="hover:text-gray-600">
                Sobre a empresa
              </a>
            </li>
            <li>
              <a href="#Contato" className="hover:text-gray-600">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Idioma Desktop */}
        <div className="hidden md:block text-white">
          <select className="bg-transparent border-none focus:outline-none cursor-pointer">
            <option>BR</option>
            <option>EN</option>
            <option>ES</option>
          </select>
        </div>

        {/* Botão Mobile */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-black/90 rounded-lg p-6 text-center space-y-4 text-white">
          <a
            href="#Servicos"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Nossos serviços
          </a>
          <a
            href="#Sobre"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Sobre a empresa
          </a>
          <a
            href="#Contato"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>

          {/* Idioma Mobile */}
          <div>
            <select className="w-full bg-transparent border p-2 rounded-md">
              <option>BR</option>
              <option>EN</option>
              <option>ES</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
