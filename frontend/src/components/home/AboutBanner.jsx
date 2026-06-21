import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";


import Scooter from "../../assets/scene/scooter.png";
import Moon from "../../assets/scene/moon.svg";
import LatteOne from "../../assets/drinks/latte-1.png";
import AboutUs from "../../assets/images/about-us.png";
import Matcha from "../../assets/drinks/matcha.png";
import Strawberry from "../../assets/drinks/strawberry.png";

export default function AboutBanner() {
  const [active, setActive] = useState(0);

  const stories = [
    {
      title: "The Ride",
      image: Scooter,
      heading: "Every journey begins somewhere.",
      description:
        "Late-night rides with no destination in mind. Just roads, silence, and the feeling that something memorable might happen.",
    },
    {
      title: "The Moment",
      image: Moon,
      heading: "The nights that stayed longer.",
      description:
        "Unexpected conversations beneath the moonlight. The kind of moments you never planned for but never forgot.",
    },
    {
      title: "The Coffee",
      image: LatteOne,
      heading: "Crafted for slow nights.",
      description:
        "From creamy lattes to comforting matcha and sweet strawberry creations, every cup is made for conversations that deserve a little more time.",
    },
    {
      title: "Sukaramai",
      image: AboutUs,
      heading: "Memories served in every cup.",
      description:
        "What began as a feeling eventually became Sukaramai—a place where coffee, stories and people meet.",
    },
  ];

  return (
    <section
      id="about"
      className="
    relative
    overflow-hidden
    pb-30

    bg-gradient-to-br
    from-[#F6F0E8]
    via-[#5A0100]
    to-[#6C0200]

    py-10
  "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#F6F0E8]/5
          blur-[120px]
        "
      />

      {/* Decorative Journey Trails */}

      <svg
        className="
    absolute
    inset-0

    h-full
    w-full

    opacity-[0.08]

    pointer-events-none
  "
        viewBox="0 0 1440 900"
      >
        <path
          d="M-100 220
       C200 40 350 380 650 220
       C900 90 1150 320 1540 180"
          stroke="#F6F0E8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="12 12"
        />

        <path
          d="M-100 650
       C250 500 350 800 750 650
       C1000 550 1250 720 1540 600"
          stroke="#F6F0E8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M250 -50
       C350 120 250 260 450 400
       C600 520 550 700 720 900"
          stroke="#F6F0E8"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div
        className="
    absolute

    top-[15%]
    left-[8%]

    h-4
    w-4

    rounded-full

    border
    border-[#F0E5D1]/15
  "
      />

      <div
        className="
    absolute

    top-[70%]
    right-[12%]

    h-6
    w-6

    rounded-full

    border
    border-[#F0E5D1]/10
  "
      />

      <div
        className="
    absolute

    top-[25%]
    right-[22%]

    h-3
    w-3

    rounded-full

    bg-[#F0E5D1]/10
  "
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-20">
          <div
            className="
  mb-7
  inline-flex
  items-center
  gap-2

  rounded-full

  border
  border-[#F6F0E8]/10

  bg-[#F6F0E8]/10

  backdrop-blur-xl

  px-4
  py-2

  text-[11px]
  font-semibold

  uppercase
  tracking-[0.2em]

  text-[#F0E5D1]
"
          >
            <Sparkles size={14} />
            Unforgettable Moments
          </div>

          <h2
            className="
              mt-5

              font-serif

              text-[#F6F0E8]

              text-5xl
              md:text-7xl
            "
          >
            The Sukaramai Journey
          </h2>

          <p
            className="
              mt-6
              mx-auto

              text-[#F6F0E8]/70

              leading-8
            "
          >
            Every cup has a story. Ours started long before coffee.
          </p>
        </div>

        {/* Timeline + Card */}

        {/* Timeline + Card */}

        <div className="max-w-6xl mx-auto">
          {/* Horizontal Timeline */}

          <div className="mb-14">
            <div className="relative flex justify-center">
              {/* Base Line */}

              <div
                className="
          absolute

          left-[10%]
          right-[10%]

          top-3

          h-[2px]

          bg-[#F6F0E8]/15
        "
              />

              {/* Progress Line */}

              <motion.div
                animate={{
                  width: `${(active / (stories.length - 1)) * 80}%`,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
          absolute

          left-[10%]
          top-3

          h-[2px]

          bg-[#F6F0E8]
        "
              />

              <div className="flex items-start justify-between w-full max-w-4xl">
                {stories.map((story, index) => (
                  <button
                    key={story.title}
                    onClick={() => setActive(index)}
                    className="
              relative

              flex
              flex-col
              items-center

              gap-3

              z-10
            "
                  >
                    <motion.div
                      animate={
                        active === index
                          ? {
                              scale: [1, 1.15, 1],
                            }
                          : {}
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className={`
                h-6
                w-6

                rounded-full

                border-4

                transition-all

                ${
                  active === index
                    ? "bg-[#F6F0E8] border-[#F6F0E8]"
                    : "bg-[#6C0200] border-[#F6F0E8]/30"
                }
              `}
                    />

                    <span
                      className={`
                font-serif

                text-lg

                transition-all

                ${active === index ? "text-[#F6F0E8]" : "text-[#F6F0E8]/60"}
              `}
                    >
                      {story.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Glow Behind Card */}

          <div
            className="
      absolute

      left-1/2

      -translate-x-1/2

      h-[350px]
      w-[350px]

      rounded-full

      bg-[#F6F0E8]/30

      blur-[120px]

      pointer-events-none
    "
          />

          {/* Story Card */}

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
  relative

  overflow-hidden

  rounded-[40px]

  border
  border-[#F0E5D1]/25

  backdrop-blur-[35px]

  p-8
  md:p-12

  shadow-[0_35px_100px_rgba(0,0,0,0.18)]
"
              style={{
                background: `
    linear-gradient(
      135deg,
      rgba(240,229,209,0.18) 20%,
      rgba(250,255,255,0.10) 70%,
      rgba(255,255,255,0.06) 100%
    )
  `,
              }}
            >
              {/* Noise Texture */}

              <div
                className="
      absolute
      inset-0

      opacity-[0.03]

      pointer-events-none
    "
                style={{
                  backgroundImage: `
        radial-gradient(circle, #F0E5D1 0.8px, transparent 0.8px)
      `,
                  backgroundSize: "12px 12px",
                }}
              />

              {/* Top Reflection */}

              <div
                className="
      absolute

      -top-24
      -left-24

      h-[320px]
      w-[320px]

      rotate-[18deg]

      bg-[#F0E5D1]/12

      blur-[90px]
    "
              />

              {/* Moving Glass Sweep */}

              <motion.div
                animate={{
                  x: ["-180%", "250%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
      absolute

      top-0

      h-full
      w-[140px]

      rotate-[15deg]

      bg-[#F0E5D1]/10

      blur-[35px]
    "
              />

              {/* Top Right Glow */}

              <div
                className="
      absolute

      -right-24
      -top-24

      h-[300px]
      w-[300px]

      rounded-full

      bg-[#F0E5D1]/8

      blur-[120px]
    "
              />

              {/* Bottom Left Animated Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                }}
                className="
      absolute

      left-0
      bottom-0

      h-[240px]
      w-[240px]

      rounded-full

      bg-[#F0E5D1]/10

      blur-[100px]
    "
              />

              {/* Inner Glass Border */}

              <div
                className="
      absolute

      inset-[1px]

      rounded-[39px]

      border

      border-[#F0E5D1]/5

      pointer-events-none
    "
              />

              {/* Top Shine Line */}

              <div
                className="
      absolute

      left-8
      right-8
      top-0

      h-px

      bg-gradient-to-r
      from-transparent
      via-[#F0E5D1]/30
      to-transparent
    "
              />
              <div
                className="
    relative
    z-10

    grid
    md:grid-cols-2

    gap-10

    items-center
  "
              >
                {/* Image */}

                <div className="flex justify-center">
                  {/* COFFEE CHAPTER */}

                  {active === 2 ? (
                    <div className="relative h-[320px] w-[340px]">
                      {/* Glow */}

                      <div
                        className="
          absolute

          left-1/2
          top-1/2

          h-[180px]
          w-[180px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#942323]/10

          blur-[70px]
        "
                      />

                      {/* Matcha */}

                      <motion.img
                        animate={{
                          y: [0, -8, 0],
                          rotate: [-8, -10, -8],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                        }}
                        src={Matcha}
                        alt=""
                        className="
          absolute

          left-0
          top-12

          w-[180px]

          z-10

          drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]
        "
                      />

                      {/* Latte Center */}

                      <motion.img
                        animate={{
                          y: [0, -12, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4.5,
                        }}
                        src={LatteOne}
                        alt=""
                        className="
          absolute

          left-1/2
          top-0

          w-[220px]

          -translate-x-1/2

          z-20

          drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]
        "
                      />

                      {/* Strawberry */}

                      <motion.img
                        animate={{
                          y: [0, -7, 0],
                          rotate: [8, 10, 8],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3.8,
                        }}
                        src={Strawberry}
                        alt=""
                        className="
          absolute

          right-0
          top-14

          w-[180px]

          z-10

          drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]
        "
                      />
                    </div>
                  ) : active === 3 ? (
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                      }}
                      className="
        h-[220px]
        w-[220px]

        rounded-full

        overflow-hidden

        border-4
        border-[#F0E5D1]

        bg-white

        shadow-[0_20px_50px_rgba(0,0,0,0.15)]
      "
                    >
                      <img
                        src={stories[active].image}
                        alt=""
                        className="
          h-full
          w-full
          object-cover
        "
                      />
                    </motion.div>
                  ) : (
                    <motion.img
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                      }}
                      src={stories[active].image}
                      alt=""
                      className="
        max-h-[260px]
        object-contain
      "
                    />
                  )}
                </div>
                {/* Content */}

                <div>
                  <div
                    className="
                      inline-flex

                      rounded-full

bg-[#F0E5D1]/10
border border-[#F0E5D1]/20
backdrop-blur-xl
                      px-4
                      py-2

                      text-xs

                      uppercase
                      tracking-[0.2em]

                      text-[#F0E5D1]
                    "
                  >
                    Chapter {active + 1}
                  </div>

                  <h3
                    className="
                      mt-6

                      font-serif

                      text-[#F0E5D1]

                      text-4xl
                      md:text-5xl
                    "
                  >
                    {stories[active].heading}
                  </h3>

                  <p
                    className="
                      mt-6

                      text-[#F0E5D1]/70

                      leading-8
                    "
                  >
                    {stories[active].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
          </div>
          <div className="mb-10"></div>

      <svg
        className="
       absolute
    bottom-[-3px]
    left-0
    block


    w-full
    h-[82px]
    sm:h-[110px]
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
    </section>
  );
}
