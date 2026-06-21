import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";
import LogoSukaRamai from "./../assets/logos/logo-sukaramai.png"
import Button from "../components/layout/Button";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(form);

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      if (response.data.user.role === "admin") {
          navigate("/admin");
          toast.success("Welcome back ☕");
       
      } else {
          navigate("/dashboard");
        toast.success("Welcome back ☕");
      }
    } catch (error) {
      toast.error("Invalid email or password");
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

      <div
        className="
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
        <h1
          className="
    mt-5

    text-center

    font-serif

    text-4xl

    text-[#F0E5D1]
  "
        >
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="
    w-full

    rounded-2xl

    border
    border-white/10

    bg-white/10

    backdrop-blur-xl

    px-4
    py-3
    mt-3 mb-3

    text-[#F0E5D1]

    placeholder:text-[#F0E5D1]/40

    outline-none

    focus:border-[#F0E5D1]/30
  "
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="
    w-full

    rounded-2xl

    border
    border-white/10

    bg-white/10

    backdrop-blur-xl
    mt-3 mb-3

    px-4
    py-3

    text-[#F0E5D1]

    placeholder:text-[#F0E5D1]/40

    outline-none

    focus:border-[#F0E5D1]/30
  "
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <div className="flex justify-center ">
          <Button type="submit">Login</Button>
        </div>

        <p className="mt-10 mb-10 text-center text-[#F0E5D1]/40">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#F0E5D1]/70 hover:text-[#F0E5D1]/100"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

  