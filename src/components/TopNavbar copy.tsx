import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // ✅ Add this
import Logo from "/logo.png";

function TopNavbarBlack() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Updated links with paths
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Magazines", path: "/magazine" },
    { name: "Gallery", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="relative p-4 md:px-10 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 md:w-16 md:h-16">
            <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-black font-bold text-[12px] md:text-[12px] xl:text-lg leading-tight">
            LEO CLUB <br />
            Sabaragamuwa University of Sri Lanka
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 md:gap-4 lg:gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-black hover:text-pink-400 cursor-pointer transition-colors text-[12px] lg:text-base text-center"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] rounded-[5px] px-5 py-2 text-white text-base md:text-[10px] lg:text-base md:w-full lg:w-auto flex justify-center items-center"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center cursor-pointer">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={
                menuOpen
                  ? "https://img.icons8.com/?size=100&id=83149&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=83195&format=png&color=000000"
              }
              alt="menu"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-full left-0 w-full bg-black/80 flex flex-col items-start px-4 py-4 gap-3 z-20">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)} // close menu after click
                className="text-white w-full py-2 px-2 rounded hover:bg-pink-600 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] rounded-[5px] w-full px-[10px] py-2 text-white"
            >
              Get In Touch
            </Link>
          </div>
        )}
      </div>

      {/* underline */}
      <div className="w-[90%] mx-auto h-[1px] bg-black/70" />
    </>
  );
}

export default TopNavbarBlack;
