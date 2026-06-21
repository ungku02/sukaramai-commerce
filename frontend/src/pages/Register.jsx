import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { register } from "../services/authService";

import LogoSukaRamai from "./../assets/logos/logo-sukaramai.png";

import Button from "../components/layout/Button";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await register(form);

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert("Registration failed");
    }
  };

  return (
    <div
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-gradient-to-br
        from-[#F6F0E8]
        via-[#5A0100]
        to-[#6C0200]

        flex
        items-center
        justify-center

        px-4
        py-8
      "
    >
      {/* Glow */}
      <div
        className="
          absolute

          top-[-100px]
          left-1/2

          -translate-x-1/2

          w-[500px]
          h-[500px]

          rounded-full

          bg-[#F0E5D1]/10

          blur-[120px]
        "
      />

      {/* Moon */}
      <div
        className="
          hidden
          md:block

          absolute

          top-12
          right-10

          text-[90px]

          text-[#F0E5D1]/10

          select-none
        "
      >
        ☾
      </div>

      {/* Trail */}
      <svg
        className="
          absolute
          inset-0

          w-full
          h-full

          opacity-10
        "
        viewBox="0 0 1440 800"
      >
        <path
          d="M0 100 C300 0 400 200 700 100 C1000 0 1200 180 1440 100"
          stroke="#F0E5D1"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Decorative Trails */}
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

      {/* Register Card */}
      <form
        onSubmit={submit}
        className="
          relative
          z-20

          w-full
          max-w-md

          rounded-[32px]

          border
          border-white/10

          bg-white/10

          backdrop-blur-2xl

          shadow-[0_20px_60px_rgba(0,0,0,0.25)]

          p-6

          sm:p-8
        "
      >
        {/* Logo */}
        <img
          src={LogoSukaRamai}
          alt="Sukaramai"
          className="
            mx-auto

            h-20
            w-20

            rounded-full

            object-cover
          "
        />

        {/* Title */}
        <h1
          className="
            mt-5

            text-center

            font-serif

            text-4xl

            text-[#F0E5D1]
          "
        >
          Join Sukaramai
        </h1>

        <p
          className="
            mt-2

            text-center

            text-sm

            text-[#F0E5D1]/60
          "
        >
          No Plans. Just Us.
        </p>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="
            w-full

            rounded-2xl

            border
            border-white/10

            bg-white/10

            backdrop-blur-xl

            px-4
            py-3

            mt-6

            text-[#F0E5D1]

            placeholder:text-[#F0E5D1]/40

            outline-none

            focus:border-[#F0E5D1]/30
          "
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="
            w-full

            rounded-2xl

            border
            border-white/10

            bg-white/10

            backdrop-blur-xl

            px-4
            py-3

            mt-3

            text-[#F0E5D1]

            placeholder:text-[#F0E5D1]/40

            outline-none

            focus:border-[#F0E5D1]/30
          "
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
          className="
            w-full

            rounded-2xl

            border
            border-white/10

            bg-white/10

            backdrop-blur-xl

            px-4
            py-3

            mt-3

            text-[#F0E5D1]

            placeholder:text-[#F0E5D1]/40

            outline-none

            focus:border-[#F0E5D1]/30
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          className="
            w-full

            rounded-2xl

            border
            border-white/10

            bg-white/10

            backdrop-blur-xl

            px-4
            py-3

            mt-3

            text-[#F0E5D1]

            placeholder:text-[#F0E5D1]/40

            outline-none

            focus:border-[#F0E5D1]/30
          "
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.password_confirmation}
          onChange={(e) =>
            setForm({
              ...form,
              password_confirmation: e.target.value,
            })
          }
          className="
            w-full

            rounded-2xl

            border
            border-white/10

            bg-white/10

            backdrop-blur-xl

            px-4
            py-3

            mt-3

            text-[#F0E5D1]

            placeholder:text-[#F0E5D1]/40

            outline-none

            focus:border-[#F0E5D1]/30
          "
        />

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <Button type="submit">Create Account</Button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-[#F0E5D1]/40">
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              text-[#F0E5D1]/70

              hover:text-[#F0E5D1]
            "
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
