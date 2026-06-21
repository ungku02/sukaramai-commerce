import { Gift, ArrowRight } from "lucide-react";

export default function PromotionBanner() {
  return (
    <section
      className="
        relative
        mb-5
        overflow-hidden

        rounded-[28px]

        border
        border-[#721111]/10

        bg-white/60

        backdrop-blur-xl

        p-5

        shadow-[0_15px_40px_rgba(74,13,13,0.08)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute

          right-0
          top-0

          h-32
          w-32

          rounded-full

          bg-[#942323]/10

          blur-3xl
        "
      />

      <div
        className="
          relative

          z-10

          flex

          items-center
          justify-between

          gap-4
        "
      >
        <div>
          <div
            className="
              inline-flex

              items-center

              gap-2

              rounded-full

              bg-[#721111]/10

              px-3
              py-1

              text-xs

              font-medium

              text-[#721111]
            "
          >
            <Gift size={14} />
            Limited Offer
          </div>

          <h3
            className="
              mt-3

              text-xl

              font-bold

              text-[#4A0D0D]
            "
          >
            Buy 2 Get 1 Free
          </h3>

          <p
            className="
              mt-1

              text-sm

              text-[#721111]/60
            "
          >
            Valid until 31 July 2026
          </p>
        </div>

        <button
          className="
            flex

            items-center

            gap-2

            rounded-full

            bg-[#721111]

            px-4
            py-2

            text-sm

            text-white

            transition

            hover:scale-105
          "
        >
          Claim
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
