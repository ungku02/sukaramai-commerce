import { motion } from "framer-motion";

import Strawberry from "./../../assets/drinks/strawberry.png";

export default function Banner3() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#F6F0E8]

        min-h-[400px]
      "
    >
      {/* Decorative Trails */}

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

          top-10
          right-12

          text-[100px]

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

    left-183
    top-40

    -translate-x-1/2
    -translate-y-1/2

    whitespace-nowrap

    font-serif

    text-[200px]
    md:text-[300px]
    lg:text-[330px]

    leading-[0.8]

    tracking-[-0.12em]

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

          top-[330px]
          left-1/2

          -translate-x-1/2

          uppercase

          tracking-[0.4em]

          text-[#6C0200]/60

          text-xs
          md:text-sm

          z-10
        "
      >
        NO PLANS. JUST US.
      </div>

      {/* Latte */}

      <div
        className="
          absolute

          bottom-[-320px]
          left-[40px]

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
            w-[300px]
            md:w-[460px]

            drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)]
          "
        />
      </div>

      {/* Bottom Quote */}

      <div
        className="
          absolute

          bottom-8
          right-12

          font-serif

          italic

          text-[#6C0200]/40

          text-lg
          md:text-xl
        "
      >
        “Every cup begins with a story.”
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
