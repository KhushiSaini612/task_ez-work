import { useState } from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import about_pin from "../assets/about_pin.png";
import about_topLeft from "../assets/about_topLeft.png";
import about_bottom from "../assets/about_bottom.png";
import about_people from "../assets/about_people.png";
import tilted_arrow from "../assets/tilted_arrow.png";
import curve_arrow from "../assets/curve_arrow.png";
import round_arrow from "../assets/round_arrow.png";
import BG from "../assets/BG.png";

export default function AboutTeam() {
  const [open, setOpen] = useState(false);
const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* 🔹 Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-8 py-4 z-[100] bg-transparent">
        {/* <img src={logo} alt="VFilms Logo" className="w-[80px] sm:w-[100px] object-contain" /> */}
        <Navbar />
      </header>

      {/* 🔸 Main Content */}
      <section id="aboutTeam" className="pt-[120px] px-6 sm:px-[40px] md:px-[80px] flex flex-col md:flex-row gap-12 md:gap-20 justify-between items-start relative">
        {/* LEFT SECTION */}
        <div className="relative flex flex-col items-center md:items-start w-full md:w-1/2">
          {/* 📌 Pin */}
          <img
            src={about_pin}
            alt="Pin"
            className="absolute top-[-40px] right-[20px] md:top-[-70px] md:right-[130px] w-[30px] md:w-[40px] z-20 rotate-[5deg]"
          />

          {/* 📄 Paper */}
          <div className="relative w-[90%] sm:w-[450px] md:w-[530px] h-auto md:h-[410px] rotate-[-10.19deg] drop-shadow-md">
            <img
              src={about_topLeft}
              alt="Paper"
              className="w-full h-auto object-contain"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col px-6 sm:px-4 md:px-5 py-4 md:py-6 text-[#0F3255] font-halant font-normal text-[12px] sm:text-[10px] md:text-[24px] leading-relaxed">
              <p>
                Some craft films. Some build brands. Some curate art.
                We bring it all together - a collective of storytellers
                driven by one belief: every project deserves to be more
                than just a message; it should become a masterpiece.
                <br />
                From first spark to final frame, from raw ideas to timeless
                visuals - we shape stories that stay with you.
              </p>
            </div>
          </div>

          {/* ⬇️ Bottom Image */}
          <img
            src={about_bottom}
            alt="About Bottom"
            className="mt-[40px] w-[220px] sm:w-[280px] md:w-[325px] h-auto object-contain"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="relative flex flex-col flex-grow items-center md:items-end w-full md:w-1/2 mt-10 md:mt-0">
          {/* 👥 People Image */}
          <div className="relative w-full top-0 md:top-40">
            <img
              src={about_people}
              alt="People"
              className="w-full h-auto md:h-[350px] rounded-lg"
            />

            {/* 🎯 Arrow Labels */}
            <div className="absolute -top-[80px] sm:-top-[100px] left-[20%] flex flex-col items-center">
              <span className="text-[#103255] font-island text-[25px] sm:text-[35px] md:text-[45px] font-normal mt-1">
                Film Makers
              </span>
              <img src={tilted_arrow} alt="Arrow Up" className="w-[60px] sm:w-[80px] md:w-[100px]" />
            </div>

            <div className="absolute -top-[90px] right-0 sm:-right-[30px] md:-right-[60px] flex flex-col items-center rotate-[10deg]">
              <span className="text-[#103255] font-island text-[25px] sm:text-[35px] md:text-[40px] font-normal mt-1 -rotate-[10deg]">
                Art Curators
              </span>
              <img src={curve_arrow} alt="Arrow Right" className="w-[40px] sm:w-[50px]" />
            </div>

            <div className="absolute -bottom-[80px] sm:-bottom-[90px] left-[-30px] sm:left-[-80px] md:left-[-100px] flex flex-col items-center -rotate-[15deg]">
              <img src={round_arrow} alt="Arrow Bottom Left" className="w-[60px] sm:w-[70px] md:w-[80px]" />
              <span className="text-[#103255] font-island text-[25px] sm:text-[35px] md:text-[40px] font-normal mt-1 rotate-[15deg]">
                Branding Experts
              </span>
            </div>
          </div>

          {/* ✨ Bottom Text + Button */}
          <div className="mt-[200px] md:mt-[270px] text-center">
            <p className="text-[#0F3255] font-halant font-normal text-[20px] sm:text-[25px] md:text-[30px] mb-6">
              Take a closer look at the stories V bring to life.
            </p>
            <button onClick={() => scrollToSection("#portfolio")} className="bg-[#F15D2B] text-white px-[16px] py-[12px] sm:px-[20px] sm:py-[14px] rounded-[30px] font-instrument text-[14px] sm:text-[16px] hover:bg-[#d14b1f] transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
