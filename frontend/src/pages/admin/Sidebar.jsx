import { useState } from "react";
import {
  LayoutDashboard,
  Coffee,
  ShoppingBag,
  Users,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import LogoSukaramai from "../../assets/logos/logo-sukaramai.png";

const menus = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: Coffee,
    label: "Menu",
  },
  {
    icon: ShoppingBag,
    label: "Orders",
  },
  {
    icon: Users,
    label: "Customers",
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const [active, setActive] = useState("Dashboard");

  return (
    <aside
      className={`
        ${collapsed ? "w-[90px]" : "w-[280px]"}

        h-screen

        sticky
        top-0

        flex
        flex-col

        transition-all
        duration-300

        bg-gradient-to-b
        from-[#721111]
        to-[#4A0D0D]

        border-r
        border-white/10
      `}
    >
      {/* Logo Section */}

      <div
        className="
          px-5
          py-6

          border-b
          border-white/10
        "
      >
        <div
          className={`
            flex
            items-center

            ${collapsed ? "justify-center" : "gap-4"}
          `}
        >
          <img
            src={LogoSukaramai}
            alt="Sukaramai"
            className="
              h-12
              w-12

              rounded-full

              object-cover

              ring-2
              ring-white/10
            "
          />

          {!collapsed && (
            <>
              <div className="flex-1">
                <h1
                  className="
                    font-serif
                    text-xl

                    text-[#F0E5D1]
                  "
                >
                  Sukaramai
                </h1>

                <p
                  className="
                    text-xs

                    uppercase

                    tracking-[0.25em]

                    text-[#F0E5D1]/50
                  "
                >
                  Admin Panel
                </p>
              </div>

              <button
                onClick={() => setCollapsed(true)}
                className="
                  text-[#F0E5D1]/70

                  hover:text-white

                  transition
                "
              >
                <PanelLeftClose size={18} />
              </button>
            </>
          )}

          {collapsed && (
            <button
              onClick={() => setCollapsed(false)}
              className="
                absolute
                bottom-6

                text-[#F0E5D1]/70

                hover:text-white

                transition
              "
            >
              <PanelLeftOpen size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}

      <div className="flex-1 p-4">
        <div className="space-y-2">
          {menus.map((item) => {
            const Icon = item.icon;

            const isActive = active === item.label;

            return (
              <button
                key={item.label}
                title={collapsed ? item.label : ""}
                onClick={() => setActive(item.label)}
                className={`
                  w-full

                  flex
                  items-center

                  ${collapsed ? "justify-center" : "gap-3"}

                  px-4
                  py-3

                  rounded-2xl

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-[#F0E5D1]

                        text-[#721111]

                        shadow-lg
                      `
                      : `
                        text-[#F0E5D1]/80

                        hover:bg-white/10

                        hover:text-[#F0E5D1]
                      `
                  }
                `}
              >
                <Icon size={20} />

                {!collapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}

      {!collapsed && (
        <div
          className="
            p-5

            border-t
            border-white/10
          "
        >
          <div
            className="
              rounded-2xl

              bg-white/5

              p-4

              text-center
            "
          >
            <p
              className="
                text-xs

                uppercase

                tracking-[0.2em]

                text-[#F0E5D1]/40
              "
            >
              Sukaramai
            </p>

            <p
              className="
                mt-2

                text-sm

                text-[#F0E5D1]/70
              "
            >
              No Plans.
              <br />
              Just Us.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
