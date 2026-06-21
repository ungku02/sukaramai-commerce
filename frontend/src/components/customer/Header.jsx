import { Bell } from "lucide-react";
import { getUser } from "../../utils/auth.js";

export default function Header() {
  const user = getUser();

  const greeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀";
    if (hour < 18) return "Good Afternoon ☕";

    return "Good Evening ☾";
  };

  return (
    <header
      className="
        sticky
        top-0
        z-40

        backdrop-blur-xl

        bg-[#F6F0E8]/80

        border-b
        border-[#721111]/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          py-4

          md:px-8
        "
      >
        <div className="flex items-center justify-between">
          {/* Left */}

          <div>
            <p
              className="
                text-sm

                text-[#721111]/60

                font-medium
              "
            >
              {greeting()}
            </p>

            <h1
              className="
                font-serif

                text-2xl

                md:text-3xl

                text-[#4A0D0D]
              "
            >
              {user?.name || "Guest"}
            </h1>

            <p
              className="
                mt-1

                text-sm

                text-[#721111]/50
              "
            >
              Ready for another comfort cup today?
            </p>
          </div>

          {/* Right */}

          <div className="flex items-center gap-3">
            {/* Notification */}

            <button
              className="
                h-11
                w-11

                rounded-full

                bg-white/70

                backdrop-blur-xl

                border
                border-white

                flex
                items-center
                justify-center

                shadow-sm

                hover:scale-105

                transition
              "
            >
              <Bell size={18} className="text-[#721111]" />
            </button>

            {/* Avatar */}

            <div
              className="
                h-11
                w-11

                rounded-full

                bg-gradient-to-br
                from-[#721111]
                to-[#942323]

                flex
                items-center
                justify-center

                text-white

                font-semibold

                shadow-md
              "
            >
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
