import { Sparkles } from "lucide-react";

import LatteOne from "./../../assets/drinks/latte-1.png";
import Matcha from "./../../assets/drinks/matcha.png";
import Strawberry from "./../../assets/drinks/strawberry.png";
import LogoSukaramai from "./../../assets/logos/logo-sukaramai.png";

export default function Banner1() {
  return (
    <section
      className="
        relative
        overflow-hidden
        mt-[-4px]

      


      "
    >
      {/* Trail Lines */}

      <svg
        className="
          absolute
          inset-0

          w-full
          h-full

          opacity-20
        "
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
      >
        <path
          d="M120 60 C120 180 300 180 300 300"
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M1320 40 C1320 200 1100 200 1100 360"
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Glow */}

      <div
        className="
          absolute

          left-1/2
          top-10

          -translate-x-1/2

          h-[300px]
          w-[300px]

          rounded-full

          bg-[#6C0200]/5

          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-6xl

          px-6

          text-center
        "
      >
        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-[#6C0200]/10

            bg-white/70

            px-4
            py-2

            text-[11px]

            font-semibold

            uppercase

            tracking-[0.25em]

            text-[#721111]

            backdrop-blur-xl
          "
        >
          <Sparkles size={14} />
          Cozy Menu Trail
        </div>

        {/* Logo */}

        <div className="mt-8 flex justify-center">
          <img
            src={LogoSukaramai}
            alt="Sukaramai"
            className="
              h-20
              w-20

              rounded-full

              border
              border-[#6C0200]/10

              bg-white

              object-cover

              shadow-[0_12px_28px_rgba(0,0,0,0.15)]
            "
          />
        </div>

        {/* Heading */}

        <h2 className="font-serif mb-3 mt-3 text-[#6C0200] text-[clamp(1.25rem,4vw,1.5rem)] leading-none">
          Cozy cups await!
        </h2>

        <p className="mx-auto mt-4 text-sm leading-7 text-[#6C0200]/68 sm:text-base">
          A warm little pause before the menu: familiar flavours, soft
          <br></br>
          sweetness, and drinks made for slow Sukaramai nights.
        </p>

        {/* Featured Drinks */}

        <div
          className="
            mb-15

    flex
    justify-center
    items-end

          
          "
        >
          {/* Matcha */}

          <div className="relative z-10 -mr-20">
            <img
              src={Matcha}
              alt="Matcha"
              className="
      w-[120px]
      md:w-[150px]

      hover:-translate-y-2

      transition-all
      duration-300

      drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]
    "
            />
          </div>

          {/* Latte */}
          <div className="relative z-20 translate-y-6">
            <img
              src={LatteOne}
              alt="Cafe Latte"
              className="
      w-[150px]
      md:w-[190px]

      hover:-translate-y-2

      transition-all
      duration-300

      drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)]
    "
            />
          </div>
          {/* Strawberry */}

          <div className="relative z-10 -ml-20">
            <img
              src={Strawberry}
              alt="Strawberry"
              className="
      w-[120px]
      md:w-[150px]

      hover:-translate-y-2

      transition-all
      duration-300

      drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]
    "
            />
          </div>
        </div>

        {/* Quote */}
      </div>
    </section>
  );
}
