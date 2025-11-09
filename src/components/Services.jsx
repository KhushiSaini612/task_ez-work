import { useState } from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import BG from "../assets/BG.png";
import underline from "../assets/underline.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import firstChanged from "../assets/firstChanged.png";
import secondChanged from "../assets/secondChanged.png";
import thirdChanged from "../assets/thirdChanged.png";
import tape from "../assets/tape.png";
import footer from "../assets/footer.png";
import backIcon from "../assets/backIcon.png";

// small images for hover 1
import small1 from "../assets/small1.png";
import small2 from "../assets/small2.png";
import small3 from "../assets/small3.png";
import small4 from "../assets/small4.png";

// small images for hover 2
import small2a from "../assets/small2a.png";
import small2b from "../assets/small2b.png";
import small2c from "../assets/small2c.png";
import small2d from "../assets/small2d.png";

// small images for hover 3
import small3a from "../assets/small3a.png";
import small3b from "../assets/small3b.png";
import small3c from "../assets/small3c.png";
import small3d from "../assets/small3d.png";

import arrowDown from "../assets/arrowDown.png";

export default function Services() {
  const [hoverState, setHoverState] = useState(null);
  const resetHover = () => setHoverState(null);

  // 🧠 Small image sets based on hover state
  const smallImages = {
    1: [small1, small2, small3, small4],
    2: [small2a, small2b, small2c, small2d],
    3: [small3a, small3b, small3c, small3d],
  };

  // 🧠 Main image for each hover
  const mainImage = {
    1: firstChanged,
    2: secondChanged,
    3: thirdChanged,
  };

  // 🧠 Heading for each hover
  const headings = {
    1: "“Filmmaking is a chance to live many lifetimes.” — Robert Altman",
    2: "A brand is a voice, and a product is a souvenir.\" - Lisa Gansky",
    3: "“V take art where it belongs, to the people.” - Vernita Verma",
  };

  // 🧠 Paragraph for each hover
  const paragraphs = {
    1: `Who says films are just an escape? We see them as a way to live many lives — to feel, to explore, and to tell stories that stay.

V crafts:
• Documentaries
• Corporate Videos
• 2D Animation Videos
• 3D Animation Videos`,

    2: `A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
We shape brands that people remember, return to, and fall in love with.

V creates:
• Branding & Communication
• Market Mapping
• Content Management
• Social Media Management
• Rebranding`,

    3: `Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
Through every festival, every performance, and every gathering, we help stories find their stage and their people.

V curates:
• Art Festivals
• Live Performances
• Community Events
• Cultural Storytelling`,
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* 🔹 Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-8 py-4 z-[100] bg-transparent">
        {/* <img src={logo} alt="VFilms Logo" className="w-[80px] sm:w-[100px] object-contain" /> */}
        <Navbar />
      </header>

      {/* 🔸 Main Section */}
      <section id="services" className="pt-[120px] sm:pt-[140px] pb-[100px] px-4 sm:px-[40px] md:px-[80px] flex flex-col items-center transition-all duration-700 ease-in-out relative">

        {/* Default Heading */}
        <h1
          className={`text-[#252729] font-halant text-[24px] sm:text-[30px] md:text-[35px] font-normal text-center transition-all duration-700 ease-in-out ${
            hoverState ? "opacity-0" : "opacity-100"
          } absolute top-[120px] sm:top-[140px] px-4`}
        >
          The storyboard reveals the breadth of our craft.
        </h1>

        {/* Hover Headings */}
        {hoverState && (
          <h1 className="text-[#252729] font-halant text-[22px] sm:text-[28px] md:text-[35px] font-normal italic text-center absolute top-[120px] sm:top-[140px] px-4 transition-all duration-700 ease-in-out opacity-100">
            {headings[hoverState]}
          </h1>
        )}

        {/* Underline */}
        <img
          src={underline}
          alt="Underline"
          className="w-[250px] sm:w-[400px] md:w-[700px] mt-[50px] mb-[50px] transition-all duration-700 ease-in-out"
        />

        {/* 🔄 Content */}
        <div className="relative w-full max-w-[1200px] flex flex-col md:flex-row justify-center items-center md:items-start transition-all duration-700 ease-in-out">
          {!hoverState ? (
            // ---------------------- Default 3 Cards Layout ---------------------
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 transition-all duration-700 ease-in-out">
              {/* Card 1 */}
              <div
                className="relative w-[280px] sm:w-[320px] md:w-[380px] transform rotate-[-5deg] cursor-pointer hover:scale-[1.02] transition-transform duration-500"
                onMouseEnter={() => setHoverState(1)}
              >
                <img src={pic1} alt="Service 1" className="w-full h-auto object-cover rounded-[10px] rotate-[5deg]" />
                <img src={tape} alt="Tape" className="absolute top-[-10px] left-[30px] sm:left-[40px] w-[80px] sm:w-[100px] rotate-[-10deg]" />
              </div>

              {/* Card 2 */}
              <div
                className="relative w-[280px] sm:w-[320px] md:w-[380px] hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                onMouseEnter={() => setHoverState(2)}
              >
                <img src={pic2} alt="Service 2" className="w-full h-auto object-cover rounded-[10px]" />
                <img src={tape} alt="Tape" className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-[80px] sm:w-[100px] rotate-[10deg]" />
              </div>

              {/* Card 3 */}
              <div
                className="relative w-[280px] sm:w-[320px] md:w-[380px] transform rotate-[-10deg] hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                onMouseEnter={() => setHoverState(3)}
              >
                <img src={pic3} alt="Service 3" className="w-full h-auto object-cover rounded-[10px] rotate-[10deg]" />
                <img src={tape} alt="Tape" className="absolute top-[10px] right-[5px] w-[80px] sm:w-[100px] rotate-[45deg]" />
              </div>
            </div>
          ) : (
            // ---------------------- Hover Layout ---------------------
            <div
              className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start relative max-w-[1200px] transition-all duration-700 ease-in-out"
              onMouseLeave={resetHover}
            >
              {/* LEFT IMAGE SECTION */}
              <div className="relative w-[280px] sm:w-[400px] lg:w-[450px] flex flex-col items-center lg:items-start transition-all duration-700 ease-in-out mb-8 lg:mb-0">
                <button
                  onClick={resetHover}
                  className="flex items-center gap-2 mb-3 text-[#F15D2B] font-instrument text-[16px] sm:text-[18px] border border-[#F15D2B] rounded-[25px] px-[10px] hover:bg-[#F15D2B] hover:text-white transition-all duration-300"
                >
                  <img src={backIcon} alt="Back" className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" />
                  Back
                </button>

                <img
                  src={mainImage[hoverState]}
                  alt="Service Main"
                  className="w-full h-auto object-cover rounded-[10px] transition-all duration-700 ease-in-out hover:scale-[1.01]"
                />

                {/* small image bottom-left */}
                <div className="absolute left-[-50px] sm:left-[-90px] bottom-0 flex flex-col gap-3 opacity-90 transition-all duration-700 ease-in-out">
                  <img src={smallImages[hoverState][0]} className="w-[70px] sm:w-[100px]" alt="thumb" />
                </div>
              </div>

              {/* RIGHT TEXT */}
              <div className="flex flex-col justify-start items-center lg:items-start w-full lg:w-[600px] px-2 sm:px-[20px] md:px-[40px] transition-all duration-700 ease-in-out">
                <p className="text-[#252729] font-instrument text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-8 sm:mb-12 md:mb-16 mt-8 sm:mt-16 whitespace-pre-line text-center lg:text-left">
                  {paragraphs[hoverState]}
                </p>

                <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
                  <span className="text-[#252729] font-instrument text-[18px] sm:text-[20px] md:text-[22px] font-medium mb-1">
                    Explore Now
                  </span>
                  <img src={arrowDown} alt="Arrow" className="w-[70px] sm:w-[90px] md:w-[100px]" />
                </div>
              </div>

              {/* RIGHT SMALL IMAGES */}
              <div className="hidden lg:flex flex-col gap-4 items-start transition-all duration-700 ease-in-out">
                <img src={smallImages[hoverState][1]} className="w-[100px] mb-12 ml-12" alt="thumb2" />
                <img src={smallImages[hoverState][2]} className="w-[100px] mr-12 mb-12" alt="thumb3" />
                <img src={smallImages[hoverState][3]} className="w-[100px] ml-12" alt="thumb4" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <div className="w-full mt-[100px] sm:mt-[120px] flex justify-center transition-all duration-700 ease-in-out">
        <img src={footer} alt="Footer Decoration" className="w-full" />
      </div>
    </div>
  );
}
