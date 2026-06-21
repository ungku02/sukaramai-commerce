import Header from "../../components/customer/Header";

export default function CustomerLayout({ children }) {
  return (
    <div
      className="
        min-h-screen

        bg-gradient-to-br
        from-[#F6F0E8]
        via-[#F8F4ED]
        to-[#F0E5D1]
      "
    >
      <Header />

      <main
        className="
          px-4
          pb-28
          pt-4

          md:px-8
        "
      >
        {children}
      </main>

      {/* <BottomNavigation /> */}
    </div>
  );
}
