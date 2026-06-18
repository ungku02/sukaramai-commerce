import { Sparkles } from "lucide-react";

import LatteOne from "./../../assets/drinks/latte-1.png";
import Matcha from "./../../assets/drinks/matcha.png";
import Strawberry from "./../../assets/drinks/strawberry.png";
import Buttercream from "./../../assets/drinks/buttercream.png";
import Chocolate from "./../../assets/drinks/chocolate.png";
import MilkTea from "./../../assets/drinks/milktea.png";

import CoffeeCard from "./CoffeeCard";

const featuredMenu = [
  {
    name: "Midnight Latte",
    note: "Velvety espresso, soft milk, and a slow evening finish.",
    detail: "Double espresso, steamed milk, brown sugar, and a mellow cocoa finish.",
    image: LatteOne,
    imageAlt: "Sukaramai hot latte",
    imageClassName: "max-w-[118px] sm:max-w-[132px] lg:max-w-[138px]",
    price: "RM 12",
  },
  {
    name: "Sukaramai Kopi",
    note: "Bold local roast with a creamy, nostalgic pull.",
    detail: "A stronger local cup with condensed milk richness and roasted depth.",
    image: Strawberry,
    imageAlt: "Sukaramai strawberry drink",
    imageClassName: "max-w-[120px] sm:max-w-[134px] lg:max-w-[140px]",
    price: "RM 9",
  },
  {
    name: "Moonlit Matcha",
    note: "Earthy matcha, chilled milk, and a gentle floral lift.",
    detail: "Ceremonial-style matcha, cold milk, vanilla, and a soft floral note.",
    image: Matcha,
    imageAlt: "Sukaramai matcha drink",
    imageClassName: "max-w-[124px] sm:max-w-[140px] lg:max-w-[146px]",
    price: "RM 13",
  },
  {
    name: "Buttercream Cloud",
    note: "Sweet cream, mellow coffee, and a soft dessert-like finish.",
    detail: "A creamy coffee blend with buttercream foam and a gentle caramel note.",
    image: Buttercream,
    imageAlt: "Sukaramai buttercream coffee",
    imageClassName: "!max-w-[112px] sm:!max-w-[129px] lg:!max-w-[135px]",
    price: "RM 14",
  },
  {
    name: "Cocoa Drift",
    note: "Chocolatey, smooth, and made for the slowest sip.",
    detail: "Rich cocoa, milk, espresso, and a rounded bittersweet finish.",
    image: Chocolate,
    imageAlt: "Sukaramai chocolate drink",
    imageClassName: "max-w-[125px] sm:max-w-[149px] lg:!max-w-[155px]",
    price: "RM 12",
  },
  {
    name: "Velvet Milk Tea",
    note: "Tea-forward comfort with creamy milk and a soft pull.",
    detail: "Black tea, chilled milk, brown sugar, and a silky finish.",
    image: MilkTea,
    imageAlt: "Sukaramai milk tea",
    imageClassName: "!max-w-[114px] sm:!max-w-[134px] lg:!max-w-[140px]",
    price: "RM 11",
  },
];

export default function MenuBanner() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#721111] px-5 py-14 text-[#F0E5D1] sm:px-8 sm:py-16 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,229,209,0.28),transparent_27%),radial-gradient(circle_at_84%_8%,rgba(255,255,255,0.14),transparent_24%),linear-gradient(145deg,rgba(148,35,35,0.9),rgba(74,13,13,0.96))]" />
      <div className="absolute inset-x-8 top-0 h-px bg-[#F0E5D1]/20" />
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

      <div className="relative z-20 mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F0E5D1]/15 bg-[#F0E5D1]/12 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F0E5D1] backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            <Sparkles size={14} />
            Signature Pour
          </div>

          <h2 className="font-serif text-[clamp(2.7rem,6vw,4.75rem)] leading-none text-[#F0E5D1]">
            Comfort cups,
            <br className="hidden sm:block" />
            made for lingering.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#F0E5D1]/76 sm:text-base md:text-lg md:leading-8">
            Three easy favourites for slow nights, shared tables, and the kind
            of plans that happen naturally.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1080px] justify-center gap-x-7 gap-y-10 sm:mt-12 md:grid-cols-[repeat(2,minmax(0,320px))] lg:grid-cols-[repeat(3,minmax(0,320px))] lg:gap-x-8 lg:gap-y-12">
          {featuredMenu.map((item) => (
            <CoffeeCard
              key={item.name}
              name={item.name}
              note={item.note}
              price={item.price}
              detail={item.detail}
              image={item.image}
              imageAlt={item.imageAlt}
              imageClassName={item.imageClassName}
            />
          ))}
        </div>
      </div>
      <div className="mt-20"></div>
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
