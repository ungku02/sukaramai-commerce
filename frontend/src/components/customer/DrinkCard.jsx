export default function DrinkCard({ image, name, price }) {
  return (
    <div
      className="
        w-full

        rounded-[20px]
        sm:rounded-[24px]
        lg:rounded-[28px]

        bg-white/70

        backdrop-blur-xl

        border
        border-white

        p-3
        sm:p-4

        shadow-[0_12px_30px_rgba(74,13,13,0.08)]

        transition

        hover:-translate-y-1
      "
    >
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="
            h-[80px]

            sm:h-[100px]

            lg:h-[120px]

            object-contain

            drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]
          "
        />
      </div>

      <div className="mt-3 sm:mt-4 text-center">
        <h3
          className="
            text-[13px]

            sm:text-[15px]

            lg:text-[16px]

            font-semibold

            text-[#4A0D0D]

            line-clamp-1
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-1

            text-[12px]

            sm:text-sm

            text-[#721111]/60
          "
        >
          {price}
        </p>
      </div>
    </div>
  );
}
