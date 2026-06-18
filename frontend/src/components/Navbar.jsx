import { ShoppingBag, Coffee, BookOpen, House, MapPin } from "lucide-react";
import LogoSukaramai from "./../assets/logos/logo-sukaramai.png";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    setActive(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    {
      id: "home",
      icon: House,
      label: "Home",
    },
    {
      id: "menu",
      icon: Coffee,
      label: "Menu",
    },
    {
      id: "about",
      icon: BookOpen,
      label: "About",
    },
    {
      id: "contact",
      icon: MapPin,
      label: "Contact",
    },
  ];
  return (
    <div className="fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-fit -translate-x-1/2 sm:top-5 lg:top-6">
      <div
        className="
                mx-auto
                flex items-center justify-center gap-1
                px-2 py-2
                sm:gap-1.5
                sm:px-2.5 sm:py-2.5
                lg:gap-2
                lg:px-3 lg:py-3
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            "
      >
        {/* Logo */}
        <div
          className="
    h-9 w-9
    sm:h-10 sm:w-10
    lg:h-12 lg:w-12
    rounded-full
    overflow-hidden

    bg-[#5e533e]

    ring-2
    ring-white/20

    shadow-lg
  "
        >
          <img
            src={LogoSukaramai}
            alt="Sukaramai"
            className="w-full h-full object-cover"
          />
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                    flex items-center justify-center
                    h-9
                    w-9
                    sm:h-10
                    sm:w-10
                    md:w-11
                    lg:h-12
                    lg:w-auto
                    lg:px-4
                    rounded-full
                    transition-all duration-300

                    ${
                      active === item.id
                        ? "bg-[#721111] text-[#F0E5D1] shadow-lg"
                        : "text-[#4D1414]/80 hover:bg-[#F0E5D1]"
                    }
                `}
            >
              {item.logo ? (
                <div
                  className="
                        w-10 h-10
                        rounded-full
                        bg-center
                        bg-cover
                        overflow-hidden
                        "
                  style={{
                    backgroundImage: `url(${LogoSukaramai})`,
                  }}
                />
              ) : (
                <Icon className="h-4 w-4 sm:h-[17px] sm:w-[17px] lg:h-[18px] lg:w-[18px]" />
              )}

              {/* {active === item.id && (
                <span className="text-sm font-medium">{item.label}</span>
              )} */}
            </button>
          );
        })}

        <button
          className="
                    ml-1
                    h-9 w-9
                    sm:h-10 sm:w-10
                    lg:ml-2
                    lg:h-12 lg:w-12
                    rounded-full

                    bg-[#942323]
                    text-white

                    flex items-center justify-center

                    hover:scale-105
                    transition
                "
        >
          <ShoppingBag className="h-4 w-4 sm:h-[17px] sm:w-[17px] lg:h-[18px] lg:w-[18px]" />
        </button>
      </div>
    </div>
  );
}
