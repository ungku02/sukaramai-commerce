import { Mail, Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactBanner() {
  const whatsappLink = "https://wa.me/60123456789";

  return (
    <section
      id="contact"
      className="
        relative
        overflow-visible

        bg-[#F6F0E8]

        py-10
        sm:py-14
        md:py-16

        mb-8
      "
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20 pointer-events-none"
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
      >
        {/* Draw animation */}
        <motion.path
          d="
            M128 370
            C470 490
            560 100
            900 170
            S1200 100
            1500 300
          "
          fill="none"
          stroke="#6C0200"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Moving light */}
        <motion.circle
          r="6"
          fill="#6C0200"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          style={{
            offsetPath: `path(
              "M148 340
              C410 430
              70 17
              800 170
              S1200 100
              1500 260"
            )`,
          }}
        />
      </svg>

      {/* Decorative Trail */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08] pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0 320
            C250 220 400 420 700 300
            C950 200 1200 380 1440 260
          "
          stroke="#6C0200"
          strokeWidth="2"
          fill="none"
          strokeDasharray="12 12"
        />
        <path
          d="
            M100 80
            C350 0 500 200 800 120
            C1100 40 1300 220 1440 100
          "
          stroke="#6C0200"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-4
          sm:px-6

          grid
          gap-10
          sm:gap-12
          lg:gap-16

          items-center

          lg:grid-cols-2
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="
              inline-flex
              items-center

              rounded-full

              border
              border-[#6C0200]/10

              bg-white/60

              px-3
              sm:px-4
              py-1.5
              sm:py-2

              backdrop-blur-xl

              text-[10px]
              sm:text-xs

              uppercase
              tracking-[0.2em]
              sm:tracking-[0.25em]

              text-[#6C0200]
              gap-2
            "
          >
            <Sparkles size={13} />
            Contact Us
          </div>

          <h2
            className="
              mt-6
              sm:mt-8
              hidden
              sm:block

              font-serif

              text-[#4D1414]

              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl

              leading-tight
              sm:leading-none
            "
          >
            Ready For
            <br />A Conversation?
          </h2>

          <p
            className="
              mt-5
              sm:mt-8
              hidden
              sm:block
              max-w-xl

              text-sm
              sm:text-base
              md:text-lg

              leading-6
              sm:leading-8

              text-[#4D1414]/70
            "
          >
            Whether it's a collaboration, event booking, partnership inquiry, or
            simply a hello, we'd love to hear from you.
          </p>

          <div
            className="
              mt-6
              sm:mt-10
 hidden
              sm:block
              flex
              items-center
              gap-2
              sm:gap-3

              text-sm
              sm:text-base

              text-[#6C0200]
            "
          >
            <ArrowRight size={16} className="shrink-0" />
            Let's create memorable moments together.
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden

            rounded-[24px]
            sm:rounded-[32px]
            md:rounded-[40px]

            border
            border-[#F0E5D1]

            bg-[#F6F0E8]/10

            backdrop-blur-[30px]

            p-6
            sm:p-8
            md:p-10
          "
        >
          {/* Premium Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4D1414]/10 to-transparent via-[#6C0200]/10 pointer-events-none" />

          {/* Top Highlight */}
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

          {/* Texture */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
              bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]
              bg-[size:18px_18px]
              pointer-events-none
            "
          />

          <h3
            className="
              font-serif

              text-2xl
              sm:text-3xl

              text-[#4D1414]
            "
          >
            Get In Touch
          </h3>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-5">
            {/* Email */}
            <div
              className="
                flex
                items-center
                gap-3
                sm:gap-4

                rounded-2xl

                bg-white/60

                p-3
                sm:p-4
              "
            >
              <Mail size={18} className="text-[#6C0200] shrink-0 sm:size-5" />

              <div>
                <p className="text-xs sm:text-sm text-[#4D1414]/60">Email</p>
                <p className="text-sm sm:text-base font-medium text-[#4D1414] break-all">
                  hello@sukaramai.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="
                flex
                items-center
                gap-3
                sm:gap-4

                rounded-2xl

                bg-white/60

                p-3
                sm:p-4
              "
            >
              <Phone size={18} className="text-[#6C0200] shrink-0 sm:size-5" />

              <div>
                <p className="text-xs sm:text-sm text-[#4D1414]/60">Phone</p>
                <p className="text-sm sm:text-base font-medium text-[#4D1414]">
                  +60 12-345 6789
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="
              mt-6
              sm:mt-8

              inline-flex
              items-center
              gap-2
              sm:gap-3

              rounded-full

              bg-gradient-to-r
              from-[#6C0200]
              to-[#8B1E1B]
              shadow-[0_10px_30px_rgba(108,2,0,0.35)]

              px-5
              sm:px-7
              py-3
              sm:py-4

              text-sm
              sm:text-base

              font-medium

              text-[#F0E5D1]

              transition-all

              hover:scale-105
              hover:shadow-[0_15px_40px_rgba(108,2,0,0.45)]
            "
          >
            <MessageCircle size={18} className="shrink-0 sm:size-5" />
            Start A Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}