import { useState, useEffect } from "react";
import mail from "../assets/mail.png";
import hamburger_closed from "../assets/hamburger_closed.png";
import hamburger_open from "../assets/hamburger_open.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // 📱 Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🧭 Smooth scroll to JSX section (by id)
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-[100] bg-transparent text-[#000000]">
      <div className="flex justify-end items-center px-8 py-4 relative">
        {/* 🔹 Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="relative z-[102] w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
        >
          <img
            src={open ? hamburger_open : hamburger_closed}
            alt="Menu Icon"
            className="w-[50px] h-[50px] object-contain transition-all duration-300 ease-in-out"
          />
        </button>

        {/* 🔹 Desktop Links (slide in from right when open) */}
        {!isMobile && (
          <ul
            className={`flex flex-row items-center space-x-8 text-[18px] font-instrument font-normal absolute right-[120px] top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
              open
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[80px] pointer-events-none"
            }`}
          >
            <li
              onClick={() => scrollToSection("#services")}
              className="cursor-pointer hover:text-[#F15D2B] transition-colors"
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection("#aboutTeam")}
              className="cursor-pointer hover:text-[#F15D2B] transition-colors"
            >
              Their Stories
            </li>
            <li
              onClick={() => scrollToSection("#aboutUs")}
              className="cursor-pointer hover:text-[#F15D2B] transition-colors"
            >
              Our Story
            </li>
            <li
              onClick={() => scrollToSection("#portfolio")}
              className="cursor-pointer hover:text-[#F15D2B] transition-colors"
            >
              Varnan
            </li>
            <li
              onClick={() => scrollToSection("#contact")}
              className="flex bg-[#F15D2B] text-white rounded-3xl px-[16px] py-[12px] justify-center items-center gap-1 cursor-pointer hover:bg-[#d14b1f] transition-all"
            >
              Let’s Talk
              <img src={mail} alt="Mail" className="w-[24px]" />
            </li>
          </ul>
        )}
      </div>

      {/* 🔹 Mobile Popup Menu */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-full w-[70%] sm:w-[55%] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-[101] flex flex-col justify-start items-center pt-24 space-y-8 text-[20px] font-instrument ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* ✖ Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-[#F15D2B] text-3xl font-bold focus:outline-none"
          >
            
          </button>

          {/* Navigation Links (slide in one-by-one) */}
          <ul className="flex flex-col space-y-8 text-center animate-slideIn">
            <li
              onClick={() => scrollToSection("#services")}
              className="list-none cursor-pointer hover:text-[#F15D2B] transition-all duration-300 transform hover:scale-105"
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection("#aboutTeam")}
              className="list-none cursor-pointer hover:text-[#F15D2B] transition-all duration-300 transform hover:scale-105"
            >
              Their Stories
            </li>
            <li
              onClick={() => scrollToSection("#aboutUs")}
              className="list-none cursor-pointer hover:text-[#F15D2B] transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </li>
            <li
              onClick={() => scrollToSection("#portfolio")}
              className="list-none cursor-pointer hover:text-[#F15D2B] transition-all duration-300 transform hover:scale-105"
            >
              Varnan
            </li>
            <li
              onClick={() => scrollToSection("#contact")}
              className="list-none flex bg-[#F15D2B] text-white rounded-3xl px-[20px] py-[12px] justify-center items-center cursor-pointer gap-2 font-instrument hover:bg-[#d14b1f] transition-all"
            >
              Let’s Talk
              <img src={mail} alt="Mail" className="w-[24px]" />
            </li>
          </ul>
        </div>
      )}

      {/* 🔹 Overlay for Mobile */}
      {isMobile && open && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[100] transition-opacity duration-300"
        ></div>
      )}
    </nav>
  );
}
