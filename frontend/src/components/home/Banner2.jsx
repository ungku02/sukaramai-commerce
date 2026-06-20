import { Sparkles, Coffee, MoonStar, Milk, CupSoda } from "lucide-react";
import Bluebery from "./../../assets/drinks/bluebery.png";
import Pistachio from "./../../assets/drinks/pistachio.png";
import { motion } from "framer-motion";

const categories = [
  { icon: Coffee, label: "Kopi" },
  { icon: MoonStar, label: "Signature" },
  { icon: Milk, label: "Latte" },
  { icon: CupSoda, label: "Chilled" },
  { icon: Sparkles, label: "Seasonal" },
];

export default function Banner2() {
  return (
    <div
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#6C0200]
        via-[#681a1a]
        to-[#8d393b]
      "
    >
      {/* Top Coffee Foam Divider */}
      <svg
        className="
          absolute
          top-0
          left-0

          w-full

          h-[50px]
          sm:h-[70px]
          md:h-[100px]

          z-[5]

          rotate-180
        "
        viewBox="0 0 1920 250"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0 130
            C150 60 350 180 520 120
            C700 60 900 180 1080 120
            C1260 60 1460 180 1680 120
            C1800 90 1880 110 1920 90
            L1920 250
            L0 250
            Z
          "
          fill="#F6F0E8"
        />
      </svg>

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2

          w-[320px]
          h-[180px]
          sm:w-[450px]
          sm:h-[240px]
          md:w-[600px]
          md:h-[300px]

          rounded-full

          bg-[#F0E5D1]/10

          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-20

          mx-auto
          max-w-6xl

          px-4
          sm:px-6
          md:px-8

          py-10
          sm:py-12
          md:py-14

          text-center
        "
      >
        {/* Journey Trails */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.08] pointer-events-none"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
        >
          {/* Main Trail */}
          <path
            d="
              M-100 180
              C250 20 350 320 700 170
              C1000 40 1200 260 1540 100
            "
            stroke="#F0E5D1"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="14 10"
          />

          {/* Lower Trail */}
          <path
            d="
              M-100 420
              C250 300 450 520 760 390
              C1000 300 1250 500 1540 360
            "
            stroke="#F0E5D1"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Vertical Curl */}
          <path
            d="
              M250 -50
              C350 100 220 180 340 300
              C450 420 420 560 580 700
            "
            stroke="#F0E5D1"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Badge */}
        <div
          className="
            mb-4
            sm:mb-5

            mt-6
            sm:mt-8
            md:mt-10

            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-white/10

            bg-white/10

            backdrop-blur-xl

            px-3
            sm:px-4
            py-1.5
            sm:py-2

            text-[9px]
            sm:text-[11px]
            font-semibold
            text-center

            uppercase
            tracking-[0.2em]
            sm:tracking-[0.25em]

            text-[#F0E5D1]
          "
        >
          <Sparkles size={13} />
          Cozy Menu Trail
        </div>

        {/* Heading */}
        <h2
          className="
            font-serif

            text-[#F0E5D1]

            text-[clamp(2rem,9vw,4.5rem)]
            sm:text-[clamp(2.5rem,6vw,4.5rem)]

            leading-none
          "
        >
          Cozy Cups Await
        </h2>

        {/* Description */}
        <p
          className="
            mt-4
            sm:mt-5

            mx-auto

            max-w-md
            sm:max-w-none

            text-center

            text-sm
            sm:text-base
            md:text-lg

            leading-relaxed

            text-[#F0E5D1]/75
          "
        >
          A warm little pause before the menu. Familiar flavours, soft
          <br className="hidden sm:block" /> sweetness, and drinks made for slow
          Sukaramai nights.
        </p>

        {/* Categories */}
        <div
          className="
            mx-auto
            mt-8
            sm:mt-10

            grid

            max-w-5xl

            grid-cols-2
            gap-x-3
            sm:gap-x-4
            gap-y-5
            sm:gap-y-6

            sm:grid-cols-3
            md:grid-cols-5
          "
        >
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex flex-col items-center">
                {/* Icon */}
                <div
                  className="
                    mb-2
                    sm:mb-3

                    flex
                    h-11
                    w-11
                    sm:h-12
                    sm:w-12
                    md:h-14
                    md:w-14

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/10

                    bg-white/10

                    backdrop-blur-xl

                    text-[#F0E5D1]

                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]

                    transition-all
                    duration-300

                    hover:scale-110
                  "
                >
                  <Icon size={18} className="sm:size-5 md:size-[22px]" />
                </div>

                {/* Label */}
                <div
                  className="
                    rounded-full

                    bg-[#F0E5D1]

                    px-3
                    sm:px-4
                    py-1.5
                    sm:py-2

                    text-[9px]
                    sm:text-[11px]

                    font-semibold

                    uppercase
                    tracking-[0.1em]
                    sm:tracking-[0.15em]

                    text-[#721111]

                    shadow-lg
                  "
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Cup */}
      <motion.img
        src={Bluebery}
        alt=""
        animate={{
          y: [0, -12, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[-20px]
          top-[60px]
          sm:right-[-30px]
          sm:top-[100px]
          md:right-[-40px]
          md:top-[190px]

          h-[140px]
          sm:h-[220px]
          md:h-[320px]
          lg:h-[420px]

          pointer-events-none

          z-[2]
        "
      />

      {/* Second Cup */}
      <motion.img
        src={Pistachio}
        alt=""
        animate={{
          y: [0, 10, 0],
          rotate: [-18, -12, -18],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[55px]
          top-[90px]
          sm:right-[80px]
          sm:top-[140px]
          md:right-[120px]
          md:top-[250px]

          h-[95px]
          sm:h-[150px]
          md:h-[220px]
          lg:h-[280px]

          rotate-[-18deg]

          opacity-90

          pointer-events-none

          z-[1]
        "
      />

      <div className="mb-8 sm:mb-10" />

      <svg
        className="
          absolute
          bottom-[-3px]
          left-0
          block

          w-full
          h-[60px]
          sm:h-[82px]
          md:h-[110px]
          lg:h-[150px]

          z-[20]
        "
        viewBox="0 0 1920 250"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0 180
            C300 120 450 220 700 150
            C900 90 1200 220 1500 140
            C1700 90 1820 140 1920 100
            L1920 250
            L0 250
            Z
          "
          fill="#F6F0E8"
        />
      </svg>
    </div>
  );
}
