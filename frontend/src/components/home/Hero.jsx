import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MoonIcon } from "lucide-react";

import Landscape from "./../../assets/scene/landscape.svg";
import Road from "./../../assets/scene/road.svg";
import Scooter from "./../../assets/scene/scooter.png";
import Moon from "./../../assets/scene/moon.svg";
import Stars from "./../../assets/scene/stars.svg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
     min-h-[100svh]
sm:min-h-[600px]
lg:min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#6C0200]
        via-[#681a1a]
        to-[#8d393b]
      "
    >
      {/* SCENE */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Landscape */}
        <motion.img
          src={Landscape}
          alt=""
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
  absolute
  bottom-0
  left-0

  w-full
  min-w-[900px]

  md:min-w-0

  h-auto
"
        />

        {/* Road */}
        <motion.img
          src={Road}
          alt=""
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.6,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
            absolute
            bottom-0
            left-0
            w-full
          "
        />

        {/* Scooter */}
        <motion.img
          src={Scooter}
          alt=""
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
          className="
absolute

bottom-[90px]
right-[-10px]

w-[90px]

sm:bottom-[110px]
sm:right-[5%]
sm:w-[120px]

md:bottom-[140px]
md:right-[10%]
md:w-[150px]

lg:bottom-[230px]
lg:right-[25%]
lg:w-[220px]
"
        />

        {/* Moon */}
        <motion.img
          src={Moon}
          alt=""
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.8,
            duration: 0.8,
          }}
          className="
absolute

top-[80px]
right-[-20px]

w-[70px]

opacity-80

sm:right-[5%]
sm:w-[90px]

md:top-[90px]
md:right-[80px]
md:w-[120px]

lg:top-[100px]
lg:right-[250px]
lg:w-[180px]
"
        />

        {/* Stars */}
        <motion.img
          src={Stars}
          alt=""
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3.2,
            duration: 0.8,
          }}
          className="
absolute

top-[55px]
right-[-110px]

w-[180px]

opacity-60

sm:w-[220px]

md:top-[70px]
md:right-[-20px]
md:w-[280px]

lg:top-[80px]
lg:right-[100px]
lg:w-[400px]
"
        />
      </div>

      {/* OVERLAY */}

      <div
        className="
    absolute
    inset-0

    bg-gradient-to-b
    from-black/10
    via-transparent
    to-black/20
  "
      />

      {/* CONTENT */}

      <div
        className="
  relative
  z-10

  min-h-[100svh]
  sm:min-h-[700px]
  lg:min-h-screen

  flex
  flex-col

  items-center
  justify-start

  text-center

  px-5

  pt-[6rem]
  pb-28

  sm:px-6
  sm:pt-[7rem]
  sm:pb-32

  md:pt-32
  md:pb-40

  lg:pt-[9rem]
"
      >
        <div className="mx-auto max-w-4xl">
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 4,
              duration: 0.6,
            }}
            className="
              inline-flex
              items-center
         
              px-4
              py-2.5
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10

              text-[#F0E5D1]

              uppercase
              tracking-[0.2em]
              text-[11px]
              sm:text-xs

              mb-5
              sm:mb-7
               gap-2 
            "
          >
            <MoonIcon size={14} />
            Sukaramai
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            style={{
              textShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 4.2,
              duration: 0.8,
            }}
            className="
              font-serif
              text-[#F0E5D1]
text-[48px]
sm:text-[60px]
md:text-[72px]
lg:text-[92px]
leading-[0.9]
              mb-4
              sm:mb-5
            "
          >
            No Plans,
            <br />
            Just Us.
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 4.5,
              duration: 0.8,
            }}
            className="
              text-[#F0E5D1]/80

             text-sm
sm:text-base
md:text-lg

              leading-relaxed

             max-w-[320px]
sm:max-w-xl
md:max-w-2xl
              mx-auto
              mb-6
              sm:mb-8
            "
          >
            Born from late-night rides, unexpected conversations, and a feeling
            worth remembering.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 4.8,
              duration: 0.8,
            }}
            className="
flex

flex-col
sm:flex-row

items-center
justify-center

gap-3
sm:gap-4

mt-5
sm:mt-7
"
          >
            <button
              className="
                bg-[#F0E5D1]
                text-[#5A0F12]

                px-6
                py-3
                sm:px-8
                sm:py-4

                rounded-full

                font-medium

                flex
                items-center
                gap-2

                hover:scale-105

                transition-all
                w-full
max-w-[280px]

sm:w-auto
              "
            >
              Explore Menu
              <ArrowRight size={18} />
            </button>

            <button
              className="
                bg-white/10
                backdrop-blur-xl

                border
                border-white/10

                text-[#F0E5D1]

                px-6
                py-3
                sm:px-8
                sm:py-4

                rounded-full

                hover:bg-white/15

                transition-all
                w-full
max-w-[280px]

sm:w-auto
              "
            >
              Our Story
            </button>
          </motion.div>
        </div>
      </div>

      {/* ROAD TRANSITION */}

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
