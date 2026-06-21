import { ArrowRight } from "lucide-react";
import LatteOne from "../../assets/drinks/latte-1.png";

export default function HeroBanner() {
  return (
    <section
      className="
        relative

        overflow-hidden

        rounded-[32px]

        bg-gradient-to-br
        from-[#721111]
        via-[#842020]
        to-[#942323]

        p-6

        md:p-8

        text-[#F0E5D1]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute

          -top-10
          -right-10

          h-40
          w-40

          rounded-full

          bg-white/10

          blur-3xl
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10

          flex
          flex-col

          md:flex-row

          md:items-center
          md:justify-between

          gap-6
        "
      >
        {/* Left */}

        <div className="max-w-lg">
          <span
            className="
              inline-flex

              rounded-full

              bg-white/10

              px-3
              py-1

              text-xs

              uppercase

              tracking-[0.2em]
            "
          >
            Today's Special
          </span>

          <h2
            className="
              mt-4

              font-serif

              text-3xl

              sm:text-4xl

              lg:text-5xl

              leading-tight
            "
          >
            Ready for another
            <br />
            comfort cup today?
          </h2>

          <p
            className="
              mt-4

              text-[#F0E5D1]/80

              max-w-md

              leading-7
            "
          >
            Slow moments, meaningful conversations, and handcrafted drinks made
            just for you.
          </p>

          <button
            className="
              mt-6

              inline-flex
              items-center

              gap-2

              rounded-full

              bg-[#F0E5D1]

              px-6
              py-3

              font-medium

              text-[#721111]

              transition

              hover:scale-105
            "
          >
            Explore Menu
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right */}

        <div
          className="
            flex
            justify-center

            md:justify-end
          "
        >
          <img
            src={LatteOne}
            alt="Latte"
                      className="
            hidden
            sm:block
              w-[120px]

              sm:w-[140px]

              lg:w-[280px]

              drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]
            "
          />
        </div>
      </div>
    </section>
  );
}
