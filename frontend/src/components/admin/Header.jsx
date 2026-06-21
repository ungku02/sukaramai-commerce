import { Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/auth.js";

export default function Header() {
  const navigate = useNavigate();

  const user = getUser();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header
      className="
        sticky
        top-0

        z-30

        h-20

        px-8

        flex
        items-center
        justify-between

        bg-white/60

        backdrop-blur-xl

        border-b
        border-[#721111]/10
      "
    >
      {/* Left */}

      <div>
        <h2
          className="
            text-2xl

            font-serif

            text-[#4A0D0D]
          "
        >
          Welcome Back ☕
        </h2>

        <p
          className="
            text-sm

            text-[#721111]/60
          "
        >
          Have a productive day, {user?.name}
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        {/* Notification */}

        <button
          className="
            h-11
            w-11

            rounded-full

            bg-white

            flex
            items-center
            justify-center

            shadow-sm

            hover:scale-105

            transition-all
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

            bg-[#721111]

            flex
            items-center
            justify-center

            text-white

            font-semibold
          "
        >
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
            px-4
            py-2

            rounded-xl

            bg-[#721111]

            text-[#F0E5D1]

            flex
            items-center

            gap-2

            hover:bg-[#5A0F12]

            transition-all
          "
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
}
