import { motion } from "framer-motion";

import Strawberry from "./../../assets/drinks/strawberry.png";

export default function Banner3() {
  return (
    <section
      className={`
        relative
        overflow-hidden

        bg-[#F6F0E8]

        min-h-[120px]
        sm:min-h-[150px]
        md:min-h-[220px]
        lg:min-h-[400px]

      `}
    >
      {/* Decorative Trails */}
      <svg
        className="absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 1440 650"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 C250 0 400 160 650 80 C900 0 1150 160 1440 70"
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M1200 -50 C1050 60 1050 180 1200 300"
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Moon */}
      <div
        className="
          absolute

          top-3
          right-3
          sm:top-6
          sm:right-6
          md:top-10
          md:right-12

          text-[40px]
          sm:text-[60px]
          md:text-[80px]
          lg:text-[100px]

          text-[#6C0200]/10

          select-none
        "
      >
        ☾
      </div>

      {/* Huge Background Text */}
      <h1
        className="
          absolute

          left-1/2
          top-10
          sm:top-10
          md:top-22
          lg:top-40

          -translate-x-1/2
          -translate-y-1/2

          whitespace-nowrap

          font-serif

          text-[clamp(48px,16vw,330px)]

          leading-[0.8]

          tracking-[-0.04em]
          sm:tracking-[-0.08em]
          md:tracking-[-0.12em]

          text-[#6C0200]

          opacity-95

          select-none
          z-10
        "
      >
        SUKARAMAI
      </h1>

      {/* Subtitle Under Logo Text */}
      <div
        className="
          absolute
          top-[80%]
          left-1/2
          -translate-x-1/2

          uppercase
          tracking-[0.4em]

          text-[#6C0200]/60

          text-[9px]
          sm:text-xs
          md:text-sm

          z-10
        "
      >
        NO PLANS. JUST US.
      </div>

      {/* Latte — hidden on phones, shown from sm up */}
      <div
        className="
          hidden
          sm:block

          absolute

          sm:bottom-[-200px]
          sm:left-[2px]
          md:bottom-[-280px]
          md:left-[2px]
          lg:bottom-[-370px]
          lg:left-[2px]

          z-20
        "
      >
        <motion.img
          src={Strawberry}
          alt="Cafe Latte"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="
            w-[220px]
            md:w-[320px]
            lg:w-[460px]

            drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)]
          "
        />
      </div>

      {/* Bottom Quote */}
      <div
        className="
          absolute
          bottom-3
          right-3
          sm:bottom-5
          sm:right-6
          md:bottom-8
          md:right-12

          hidden
          sm:block
          font-serif
          italic

          text-[#6C0200]/40

          text-xs
          sm:text-xs
          md:text-lg
          lg:text-xl

          z-10
        "
      >
        "Every cup begins with a story."
      </div>

      <svg
        className="absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 1440 650"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 C250 0 400 160 650 80 C900 0 1150 160 1440 70"
          stroke="#F0E5D1"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M1200 -50 C1050 60 1050 180 1200 300"
          stroke="#F0E5D1"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </section>
  );
}
