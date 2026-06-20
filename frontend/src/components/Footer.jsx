import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import LogoSukaramai from "./../assets/logos/logo-sukaramai.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#F6F0E8] via-[#F8F3EC] to-[#ffe0d9]">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06] pointer-events-none"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
      >
        <path
          d="M0 140 C250 40 400 260 700 160 C950 80 1150 240 1440 120"
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 320 C250 240 450 420 750 340 C1050 260 1250 420 1440 300"
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
          strokeDasharray="12 12"
        />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full opacity-10 pointer-events-none"
        viewBox="0 0 1440 650"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 C250 0 400 160 650 80 C900 0 1150 160 1440 70"
          stroke="#4D1414"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M1200 -50 C1050 60 1050 180 1200 300"
          stroke="#4D1414"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 md:py-12 mb-0 sm:mb-0 md:mb-3 lg:mb-3">
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="min-w-0">
            <img
              src={LogoSukaramai}
              alt="Sukaramai"
              className="h-9 w-9 sm:h-12 sm:w-12 md:h-[60px] md:w-[60px] rounded-full object-cover border border-[#6C0200]/10 shadow-md"
            />
            <h3 className="mt-2 sm:mt-3 font-serif text-sm sm:text-xl md:text-2xl text-[#4D1414]">
              Sukaramai
            </h3>
            <p className="mt-1 sm:mt-3 text-[10px] sm:text-sm md:text-base leading-tight sm:leading-7 text-[#4D1414]/65">
              More than coffee.
            </p>

            <div className="mt-2 sm:mt-3 flex gap-1.5 sm:gap-3">
              <a
                href="#"
                className="flex h-6 w-6 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-[#6C0200] shadow-md transition-all hover:-translate-y-1"
              >
                <FaInstagram size={11} />
              </a>
              <a
                href="#"
                className="flex h-6 w-6 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-[#6C0200] shadow-md transition-all hover:-translate-y-1"
              >
                <FaFacebookF size={11} />
              </a>
              <a
                href="#"
                className="flex h-6 w-6 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-[#6C0200] shadow-md transition-all hover:-translate-y-1"
              >
                <FaTiktok size={11} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="min-w-0">
            <h4 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-semibold text-[#4D1414]">
              Explore
            </h4>
            <div className="space-y-1 sm:space-y-2">
              <a
                href="#home"
                className="block text-[10px] sm:text-sm md:text-base text-[#4D1414]/70 hover:text-[#6C0200]"
              >
                Home
              </a>
              <a
                href="#menu"
                className="block text-[10px] sm:text-sm md:text-base text-[#4D1414]/70 hover:text-[#6C0200]"
              >
                Menu
              </a>
              <a
                href="#about"
                className="block text-[10px] sm:text-sm md:text-base text-[#4D1414]/70 hover:text-[#6C0200]"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-[10px] sm:text-sm md:text-base text-[#4D1414]/70 hover:text-[#6C0200]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="mb-1.5 sm:mb-3 text-xs sm:text-sm md:text-base font-semibold text-[#4D1414]">
              Get In Touch
            </h4>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex gap-1.5 sm:gap-3">
                <Phone size={13} className="text-[#6C0200] mt-0.5 shrink-0" />
                <span className="text-[10px] sm:text-sm md:text-base text-[#4D1414]/70 break-words">
                  +60 12-345 6789
                </span>
              </div>
              <div className="flex gap-1.5 sm:gap-3">
                <Mail size={13} className="text-[#6C0200] mt-0.5 shrink-0" />
                <span className="text-[10px] sm:text-sm md:text-base text-[#4D1414]/70 break-words">
                  hello@sukaramai.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 sm:my-5 h-px bg-[#6C0200]/10" />

        <div className="flex flex-col gap-1.5 sm:gap-1 text-center text-[10px] sm:text-sm text-[#4D1414]/50 sm:flex-row sm:justify-between">
          <p>© 2026 Sukaramai. All rights reserved.</p>
          <p>No Plans. Just Us.</p>
        </div>
      </div>
    </footer>
  );
}
