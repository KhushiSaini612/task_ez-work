import { useState } from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import BG from "../assets/BG.png";
import footer_topRight from "../assets/footer_topRight.png";
import footer_left from "../assets/footer_left.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all required fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess("Form Submitted ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BG})` }}
    >
   
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-[100] bg-transparent">
        {/* <img
          src={logo}
          alt="VFilms Logo"
          className="w-[80px] md:w-[100px] object-contain"
        /> */}
        <Navbar />
      </header>

     
      <img
        src={footer_left}
        alt="Footer Decoration"
        className="absolute bottom-0 left-0 w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain z-0"
      />
      <img
        src={footer_topRight}
        alt="Top Decoration"
        className="absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-[450px] h-auto object-contain z-0"
      />

      {/* Main Section */}
      <section
        id="contact"
        className="relative flex flex-col lg:flex-row justify-between items-stretch w-full min-h-screen z-10"
      >
        {/* LEFT SIDE  */}
        <div className="w-full lg:w-[40%] flex justify-center items-center text-center lg:text-left px-6 md:px-12 py-20 lg:py-0">
          <p className="text-[#000000] font-instrument text-[18px] md:text-[20px] leading-relaxed max-w-[500px]">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V’re just a message away.
            <br />
            Let’s catch up over coffee.
            <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center items-center px-6 md:px-10 py-16">
          <div className="w-full max-w-[600px] text-center">
          
            <h2 className="text-[#252729] font-halant text-[28px] md:text-[40px] mb-2">
              Join the Story
            </h2>
            <p className="text-[#252729] font-instrument text-[18px] md:text-[20px] mb-10">
              Ready to bring your vision to life? Let’s talk.
            </p>

       
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 w-full"
            >
              {error && (
                <p className="text-red-600 font-medium text-[16px]">{error}</p>
              )}
              {success && (
                <p className="text-green-600 font-medium text-[16px]">
                  {success}
                </p>
              )}

              <input
                name="name"
                type="text"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#FFFFFF] px-4 py-3 rounded-[8px] text-[#757575] font-instrument focus:outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#FFFFFF] px-4 py-3 rounded-[8px] text-[#757575] font-instrument focus:outline-none"
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#FFFFFF] px-4 py-3 rounded-[8px] text-[#757575] font-instrument focus:outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#FFFFFF] px-4 py-3 rounded-[8px] text-[#757575] font-instrument focus:outline-none resize-none"
              ></textarea>

             
              <button
                type="submit"
                disabled={loading}
                className={`w-[140px] mx-auto ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#F15D2B] hover:bg-[#d14b1f]"
                } text-white py-3 rounded-[25px] font-instrument text-[18px] transition-colors duration-300`}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

        
            <div className="flex justify-center items-center flex-wrap gap-3 text-[#F15D2B] font-halant font-bold text-[14px] md:text-[16px] mt-6">
              <span>vernita@varnanfilms.co.in</span>
              <span>|</span>
              <span>+91 98736 84567</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
