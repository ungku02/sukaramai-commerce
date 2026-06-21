import DrinkCard from "./DrinkCard";

import Latte from "../../assets/drinks/latte-1.png";
import Matcha from "../../assets/drinks/matcha.png";
import Strawberry from "../../assets/drinks/strawberry.png";
import Chocolate from "../../assets/drinks/chocolate.png";

const drinks = [
  {
    name: "Midnight Latte",
    price: "RM 12",
    image: Latte,
  },
  {
    name: "Moonlit Matcha",
    price: "RM 13",
    image: Matcha,
  },
  {
    name: "Berry Cloud",
    price: "RM 14",
    image: Strawberry,
  },
  {
    name: "Cocoa Drift",
    price: "RM 12",
    image: Chocolate,
  },
];

export default function PopularDrinks() {
  return (
    <section>
      <div
        className="
          mb-5
          mt-5

          flex

          items-center
          justify-between
        "
      >
        <h2
          className="
            text-xl

            font-bold

            text-[#4A0D0D]
          "
        >
          Popular Drinks
        </h2>

        <button
          className="
            text-sm

            text-[#721111]

            font-medium
          "
        >
          View All
        </button>
      </div>

      <div
        className="
    grid

    grid-cols-2

    gap-4

    

    md:grid-cols-2

    lg:grid-cols-4
  "
      >
        {drinks.map((drink) => (
          <DrinkCard key={drink.name} {...drink} />
        ))}
      </div>
    </section>
  );
}