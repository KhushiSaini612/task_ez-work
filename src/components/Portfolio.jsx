import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import BG from "../assets/BG.png";
import camera from "../assets/camera.png";
import youtube from "../assets/youtube.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import footer_right from "../assets/footer_right.png";

export default function Portfolio() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* 🔹 Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-[100] bg-transparent">
        {/* <img src={logo} alt="VFilms Logo" className="w-[80px] md:w-[100px] object-contain" /> */}
        <Navbar />
      </header>

      {/* 🔸 Main Section */}
      <section id="portfolio" className="pt-[120px] md:pt-[140px] pb-[80px] px-6 md:px-[80px] flex flex-col items-center relative">
        {/* Headings */}
        <h1 className="text-[#252729] font-halant text-[28px] md:text-[40px] font-normal text-center mb-2">
          The Highlight Reel
        </h1>
        <p className="text-[#252729] font-instrument text-[18px] md:text-[24px] text-center mb-[50px] md:mb-[80px]">
          Watch the magic we’ve captured.
        </p>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full relative max-w-[1500px] gap-10 md:gap-16">
          {/* Left - Camera Image */}
          <div className="w-[150px] md:w-[180px] lg:w-[200px] flex justify-center">
            <img
              src={camera}
              alt="Camera"
              className="w-full h-auto object-contain rotate-[-5deg]"
            />
          </div>

          {/* Center - YouTube Frame with arrows */}
          <div className="relative w-full max-w-[700px] h-auto flex justify-center items-center">
            <img
              src={youtube}
              alt="YouTube Frame"
              className="w-full h-auto object-contain rounded-[10px] shadow-md"
            />

            {/* Left Arrow */}
            <img
              src={left}
              alt="Arrow Left"
              className="absolute top-1/2 -translate-y-1/2 left-[10px] md:left-[30px] w-[35px] md:w-[50px] cursor-pointer hover:scale-110 transition-transform"
            />

            {/* Right Arrow */}
            <img
              src={right}
              alt="Arrow Right"
              className="absolute top-1/2 -translate-y-1/2 right-[10px] md:right-[30px] w-[35px] md:w-[50px] cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* 🔻 Footer Image (bottom-right) */}
      <div className="absolute bottom-0 right-0 w-[150px] md:w-[200px] lg:w-[250px]">
        <img
          src={footer_right}
          alt="Footer Decoration"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}
