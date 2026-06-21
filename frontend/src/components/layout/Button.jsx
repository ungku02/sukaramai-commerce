export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: `
      bg-[#F0E5D1]
      text-[#5A0F12]

      hover:scale-[1.03]
      hover:shadow-xl
    `,

    secondary: `
      bg-white/10
      text-[#F0E5D1]

      border
      border-white/10

      backdrop-blur-xl

      hover:bg-white/15
      hover:scale-[1.03]
    `,

    danger: `
      bg-red-600
      text-white

      hover:bg-red-700
      hover:scale-[1.03]
    `,
  };

  return (
    <button
      type={type}
      className={`
        inline-flex
        items-center
        justify-center

        gap-2
        w-1/2

        rounded-full

        px-3
        py-3
        mb-3 mt-3

        font-medium

        transition-all
        duration-300

        active:scale-95

        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
