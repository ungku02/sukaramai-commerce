import { Coffee } from "lucide-react";

export default function CoffeeCard({
  name,
  note,
  price,
  detail,
  image,
  imageAlt,
  imageClassName = "",
}) {
  return (
    <article
      className="
    group
    relative

    w-full
max-w-[170px]

sm:max-w-[190px]

md:max-w-[320px]

lg:max-w-[360px]
    pt-20

    [perspective:1200px]
  "
    >
      {image && (
        <img
          src={image}
          alt={imageAlt || name}
          className={`pointer-events-none absolute left-1/2 top-[30px] md:top-[-14px] z-20 w-[45%]

max-w-[110px]

sm:max-w-[130px]

md:max-w-[140px] -translate-x-1/2 drop-shadow-[0_18px_24px_rgba(0,0,0,0.28)] transition duration-500 group-hover:-translate-y-2 group-hover:scale-105 sm:top-[-18px] sm:w-[52%] sm:max-w-[145px] lg:max-w-[150px] ${imageClassName}`}
        />
      )}
      <div
        className=" h-[190px]

    sm:h-[210px]

    md:h-[290px]"
      >
        <div
          className="relative h-full rounded-lg transition-transform duration-700 [transform-style:preserve-3d] md:group-focus-within:[transform:rotateY(180deg)]
md:group-hover:[transform:rotateY(180deg)]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-lg border border-white/65 bg-white/20 p-4 pt-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_22px_58px_rgba(74,13,13,0.18)] backdrop-blur-[28px] [backface-visibility:hidden] sm:p-5 sm:pt-16">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.58),rgba(255,255,255,0.08)_38%,rgba(255,255,255,0.22))]" />
            <div className="absolute inset-x-0 top-0 h-px bg-white" />
            <div className="absolute left-0 top-0 h-full w-px bg-white/80" />
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/50 blur-3xl" />
            <div className="absolute -bottom-12 left-6 h-28 w-28 rounded-full bg-[#F0E5D1]/45 blur-3xl" />

            <div className="relative z-10 mb-4 flex items-center justify-between gap-4 sm:mb-5">
              <div
                className="flex h-8 w-8
md:h-10 md:w-10 items-center justify-center rounded-full border border-white/70 bg-[#721111]/75 text-[#F0E5D1] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_24px_rgba(74,13,13,0.2)] backdrop-blur-xl sm:h-11 sm:w-11"
              >
                <Coffee size={18} />
              </div>
              <span
                className="rounded-full text-[10px]
md:text-sm border border-white/70 bg-white/30 px-3 py-1 text-sm font-bold text-[#721111] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-2xl"
              >
                {price}
              </span>
            </div>

            <h3
              className="
    relative
    z-10

    text-[12px]
md:text-[18px]

    font-semibold

    text-[#4A0D0D]
  "
            >
              {name}
            </h3>
            <p
              className="relative z-10 mt-2 line-clamp-2
sm:line-clamp-3 text-[11px]
leading-4

md:text-sm
md:leading-6  text-[#4A0D0D]/68 sm:mt-3"
            >
              {note}
            </p>
            <span
              className="absolute bottom-4 left-4  hidden
    md:block z-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#721111]/65 sm:bottom-5 sm:left-5 sm:text-xs"
            >
              Flip
            </span>
          </div>

          <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-lg border border-white/70 bg-[#721111]/80 p-4 pt-14 text-[#F0E5D1] shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_22px_58px_rgba(74,13,13,0.22)] backdrop-blur-[30px] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5 sm:pt-16">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(240,229,209,0.24),rgba(255,255,255,0.06)_42%,rgba(255,255,255,0.16))]" />
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/25 blur-3xl" />

            <div className="relative z-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F0E5D1]/70 sm:text-xs sm:tracking-[0.22em]">
                Taste Notes
              </span>
              <h3 className="mt-2 font-serif text-2xl leading-tight sm:mt-4 sm:text-2xl">
                {name}
              </h3>
              <p
                className="mt-3 line-clamp-3
sm:line-clamp-4 text-sm leading-6 text-[#F0E5D1]/78 sm:mt-4 sm:leading-7"
              >
                {detail || "Smooth, balanced, and made for slow conversations."}
              </p>
            </div>

            {/* <button className="relative z-10 inline-flex w-fit items-center rounded-full border border-[#F0E5D1]/45 bg-[#F0E5D1]/15 px-4 py-2 text-sm font-semibold text-[#F0E5D1] backdrop-blur-xl transition hover:bg-[#F0E5D1]/24">
              Add to Order
            </button> */}
          </div>
        </div>
      </div>
    </article>
  );
}
