import Sidebar from "./Sidebar";
import Header from "../../components/admin/Header";

export default function AdminLayout({ children }) {
  return (
    <div
      className="
        flex

        min-h-screen

        bg-gradient-to-br
        from-[#F6F0E8]
        via-[#F8F4ED]
        to-[#F0E5D1]
      "
    >
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
