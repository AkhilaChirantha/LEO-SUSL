import { useState, useEffect } from "react";
import Logo from '/logo.png';

function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  // ✅ Handle screen resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = ["Home", "About Us", "Projects", "Contact"];

  return (
    <>
    <div className="relative  p-4 md:px-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-16 md:h-16">
          <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
        <div className="text-white font-bold text-[10px] md:text-lg">
          LEO CLUB <br />Sabaragamuwa University of Sri Lanka
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <div key={link} className="text-white hover:text-pink-400 cursor-pointer">
            {link}
          </div>
        ))}
        <button className="bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] rounded-[5px] px-5 py-2 text-white">
          Get In Touch
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={menuOpen
              ? "https://img.icons8.com/?size=100&id=83149&format=png&color=ffffff"
              : "https://img.icons8.com/?size=100&id=83195&format=png&color=ffffff"}
            alt="menu"
            className="w-6 h-6"
          />
        </button>
      </div>
      

      {/* Mobile Menu */}
      {menuOpen && isMobile && (
        <div className="absolute top-full left-0 w-full bg-black/80 flex flex-col items-start px-4 py-4 gap-3 z-20">
          {links.map((link) => (
            <div key={link} className="text-white w-full py-2 px-2 rounded hover:bg-pink-600 cursor-pointer">
              {link}
            </div>
          ))}
          <button className="bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] rounded-[5px] w-full py-2 text-white">
            Get In Touch
          </button>
        </div>
      )}
    </div>
    <div className=" h-[0.5px] bg-[#ffffff] " />

    </>
  );

}

export default TopNavbar;
