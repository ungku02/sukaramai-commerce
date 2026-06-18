import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

import LogoSukaramai from "./../assets/logos/logo-sukaramai.png";

export default function Footer() {
  return (
    <footer
      className="
    relative
    overflow-hidden

    bg-gradient-to-br

    from-[#F6F0E8]
    via-[#F8F3EC]
    to-[#ffe0d9]
  "
    >
      <svg
        className="
    absolute
    inset-0

    h-full
    w-full

    opacity-[0.06]

    pointer-events-none
  "
        viewBox="0 0 1440 500"
      >
        <path
          d="
      M0 140
      C250 40 400 260 700 160
      C950 80 1150 240 1440 120
    "
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="
      M0 320
      C250 240 450 420 750 340
      C1050 260 1250 420 1440 300
    "
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
          strokeDasharray="12 12"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 mb-5">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}

          <div>
            <img
              src={LogoSukaramai}
              alt="Sukaramai"
              className="
        h-15
        w-15

        rounded-full

        object-cover

        border
        border-[#6C0200]/10

        shadow-md
      "
            />
            

            <h3
              className="
        mt-3

        font-serif

        text-2xl

        text-[#4D1414]
      "
            >
              Sukaramai
            </h3>

            <p
              className="
        mt-3

        leading-7

        text-[#4D1414]/65
      "
            >
              More than coffee.
            </p>

            {/* Social */}

            <div className="mt-3 flex gap-3">
              <a
                href="#"
                className="
          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-full

          bg-white

          text-[#6C0200]

          shadow-md

          transition-all

          hover:-translate-y-1
        "
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="
          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-full

          bg-white

          text-[#6C0200]

          shadow-md

          transition-all

          hover:-translate-y-1
        "
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="
          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-full

          bg-white

          text-[#6C0200]

          shadow-md

          transition-all

          hover:-translate-y-1
        "
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          <svg
            className="
          absolute
          inset-0

          h-full
          w-full

          opacity-10
        "
            viewBox="0 0 1440 650"
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

          {/* Explore */}

          <div>
            <h4
              className="
        mb-2

        font-semibold

        text-[#4D1414]
      "
            >
              Explore
            </h4>

            <div className="space-y-2">
              <a
                href="#home"
                className="block text-[#4D1414]/70 hover:text-[#6C0200]"
              >
                Home
              </a>

              <a
                href="#menu"
                className="block text-[#4D1414]/70 hover:text-[#6C0200]"
              >
                Menu
              </a>

              <a
                href="#about"
                className="block text-[#4D1414]/70 hover:text-[#6C0200]"
              >
                About Us
              </a>

              <a
                href="#contact"
                className="block text-[#4D1414]/70 hover:text-[#6C0200]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h4
              className="
        mb-3

        font-semibold

        text-[#4D1414]
      "
            >
              Get In Touch
            </h4>

            <div className="space-y-2">
              <div className="flex gap-3">
                <Phone size={18} className="text-[#6C0200] mt-0.5" />
                <span className="text-[#4D1414]/70">+60 12-345 6789</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-[#6C0200] mt-0.5" />
                <span className="text-[#4D1414]/70">hello@sukaramai.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}

        <div className="my-5 h-px bg-[#6C0200]/10" />

        {/* Copyright */}

        <div
          className="
    flex
    flex-col

    gap-2

    text-center

    text-sm

    text-[#4D1414]/50

    md:flex-row
    md:justify-between
  "
        >
          <p>© 2026 Sukaramai. All rights reserved.</p>

          <p>No Plans. Just Us.</p>
        </div>
      </div>
    </footer>
  );
}
