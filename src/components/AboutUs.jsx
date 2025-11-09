import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import about_topLeft from "../assets/about_topLeft.png";
import scenery from "../assets/scenery.png"; 
import outline from "../assets/outline.png"; 
import BG from "../assets/BG.png";

export default function AboutUs() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BG})` }}
    >
      
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-8 py-4 z-[100] bg-transparent">
        {/* <img src={logo} alt="VFilms Logo" className="w-[80px] sm:w-[100px] object-contain" /> */}
        <Navbar />
      </header>

      {/* Main Section */}
      <section id="aboutUs" className="pt-[120px] md:pt-[140px] px-6 sm:px-10 md:px-[80px] flex flex-col md:flex-row justify-between gap-16">
        {/* LEFT SECTION */}
        <div className="flex flex-col w-full md:w-[50%] relative mt-12 md:mt-24 items-center md:items-center">
          
          <h2 className="text-[#252729] font-halant font-normal text-center md:text-center text-[24px] sm:text-[28px] md:text-[32px] mb-6">
            A montage of familiar faces and names.
          </h2>
          <p className="text-[#252729] font-instrument text-center md:text-center text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-12 sm:mb-16 px-2 sm:px-8 md:px-4">
            Some stories come from the biggest names. Others begin with bold, rising voices.
            We’ve been fortunate to walk alongside both – listening, creating, and building
            stories that matter.
          </p>

          <div className="relative w-full flex justify-center md:justify-start scale-[0.8] sm:scale-[0.9] md:scale-100">
          
            <div className="absolute top-0 left-[10%] sm:left-[0px] rotate-[10deg] drop-shadow-md">
              <img src={about_topLeft} alt="Paper 1" className="w-[140px] sm:w-[180px] md:w-[200px] object-contain" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-[#0F3255]">
                <p className="text-[#103255] font-instrument text-[40px] sm:text-[50px] md:text-[60px]">85+</p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-instrument font-normal mt-1 text-[#F15D2B] text-center">Projects</p>
              </div>
            </div>

           
            <div className="absolute top-[-5px] left-[40%] sm:left-[160px] md:left-[190px] rotate-[10deg] drop-shadow-md">
              <img src={about_topLeft} alt="Paper 2" className="w-[140px] sm:w-[180px] md:w-[200px] object-contain" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-[#0F3255]">
                <p className="text-[#103255] font-instrument text-[40px] sm:text-[50px] md:text-[60px]">50+</p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-instrument font-normal mt-1 text-[#F15D2B] text-center">Happy Clients</p>
              </div>
            </div>

          
            <div className="absolute top-[-8px] left-[70%] sm:left-[320px] md:left-[380px] rotate-[10deg] drop-shadow-md">
              <img src={about_topLeft} alt="Paper 3" className="w-[140px] sm:w-[180px] md:w-[200px] object-contain" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-[#0F3255]">
                <p className="text-[#103255] font-instrument text-[40px] sm:text-[50px] md:text-[60px]">10+</p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-instrument font-normal mt-1 text-[#F15D2B] text-center">Expert Team</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[50%] flex flex-col justify-between items-center md:items-center mt-12 md:mt-0">
      
          <div className="max-w-[600px]">
            <p className="text-[#0F3255] font-island text-[28px] sm:text-[36px] md:text-[50px] mb-10 text-center md:text-center leading-snug">
              Every project is more than just a brief – it’s a new chapter waiting to be written.
              Together, we've crafted tales that inspire, connect, and endure.
            </p>
          </div>

          <div className="relative w-full flex justify-center md:justify-end mt-[40px] sm:mt-[60px]">
            <img
              src={scenery}
              alt="Scenery"
              className="w-[250px] sm:w-[350px] md:w-[400px] h-auto object-cover rounded-[10px]"
            />
            <img
              src={outline}
              alt="Semicircle Text Overlay"
              className="absolute top-[-60px] left-1/2 md:left-[420px] -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
