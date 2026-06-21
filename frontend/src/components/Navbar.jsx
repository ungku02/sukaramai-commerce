import { ShoppingBag, Coffee, BookOpen, House, MapPin } from "lucide-react";
import LogoSukaramai from "./../assets/logos/logo-sukaramai.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();
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
    <div
      className="
    fixed

    left-1/2
    top-3

    z-50

    w-auto

    -translate-x-1/2

    sm:top-4
    lg:top-6
  "
    >
      <div
        className="
                mx-auto
                flex items-center justify-center gap-1
                px-2 px-1.5 py-1.5

                sm:px-2
                sm:py-2

                lg:px-3
                lg:py-3-2
                sm:gap-1.5
                lg:gap-2
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
  h-8 w-8

sm:h-9
sm:w-9

lg:h-12
lg:w-12
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
                    h-8
                    w-8

                    sm:h-9
                    sm:w-9

                    md:h-10
                    md:w-10

                    lg:h-12
                    lg:w-auto
                    lg:px-4
                    rounded-full
                    transition-all duration-300

                    ${
                      active === item.id
                        ? "bg-[#721111] text-[#F0E5D1] shadow-lg"
                        : "text-[#4D1414] hover:bg-[#F0E5D1]"
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
                <Icon
                  className="h-3.5
                    w-3.5

                    sm:h-4
                    sm:w-4

                    lg:h-[18px]
                    lg:w-[18px]"
                />
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
                   h-8
                    w-8

                    sm:h-9
                    sm:w-9

                    lg:h-12
                    lg:w-12
                                        
                    rounded-full

                    bg-[#942323]
                    text-white

                    flex items-center justify-center

                    hover:scale-105
                    transition
                "
        >
          <ShoppingBag
            onClick={() => navigate("/login")}
            className="h-4 w-4 sm:h-[17px] sm:w-[17px] lg:h-[18px] lg:w-[18px]"
          />
        </button>
      </div>
    </div>
  );
}
