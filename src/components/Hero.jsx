import mandala from "../assets/Mandala.png";
import logo from "../assets/logo.png";
import BG from "../assets/BG.png";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row gap-16 md:gap-32 items-center justify-between min-h-screen bg-cover bg-center bg-no-repeat px-6 sm:px-8 md:px-10 pt-24"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* 🔹 Header */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-[100] bg-transparent">
              <img src={logo} alt="VFilms Logo" className="w-[80px] md:w-[100px] object-contain" />
              <Navbar />
            </header>
      {/* Left Images */}
      <div className="relative w-full md:w-2/5 flex justify-center items-center mb-10 md:mb-0">
        <img
          src={mandala}
          alt="Mandala"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[450px] opacity-90"
        />
        <img
          src={logo}
          alt="Logo"
          className="absolute w-[90px] sm:w-[110px] md:w-[120px] lg:w-[200px]"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-3/5 text-center md:text-center mt-0 md:mt-0 flex flex-col items-center md:items-center">
        <h1 className="text-2xl sm:text-4xl md:text-[90px] font-island leading-tight md:leading-[90px] text-[#0F3255] font-normal text-center md:text-center">
          Varnan is where stories find their voice and form
        </h1>
        <p className="text-[#F15D2B] leading-[50px] sm:leading-[65px] md:leading-[85px] text-2xl sm:text-3xl md:text-[40px] md:text-center text-center font-halant font-normal mt-4">
          Films . Brands . Art
        </p>
        <p className="text-[#252729] mt-6 font-instrument font-normal text-[14px] sm:text-[15px] md:text-[18px] text-center md:text-center w-full sm:w-[90%] md:w-[487px] h-auto sm:h-auto justify-center mx-auto">
          Since 2009, V’ve been telling stories – stories of people, their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares. But every story starts the same way – by listening with intention.
          V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
          <br />
          V doesn’t just tell stories – V honors them.
        </p>
      </div>
    </section>
  );
}
