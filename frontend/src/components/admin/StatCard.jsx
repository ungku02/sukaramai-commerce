export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div
      className="
        group

        relative

        overflow-hidden

        rounded-3xl

        border
        border-white/60

        bg-white/50

        backdrop-blur-xl

        p-6

        shadow-[0_15px_40px_rgba(74,13,13,0.08)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(74,13,13,0.15)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute

          -right-8
          -top-8

          h-24
          w-24

          rounded-full

          bg-[#721111]/10

          blur-3xl
        "
      />

      {/* Content */}

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p
            className="
              text-sm

              font-medium

              text-[#721111]/60
            "
          >
            {title}
          </p>

          <h3
            className="
              mt-2

              text-4xl

              font-bold

              text-[#4A0D0D]
            "
          >
            {value}
          </h3>
        </div>

        <div
          className="
            flex

            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            bg-[#721111]

            text-[#F0E5D1]

            shadow-lg
          "
        >
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
