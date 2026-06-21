import { Coffee, ShoppingBag, Users, DollarSign } from "lucide-react";

import AdminLayout from "./AdminLayout";
import StatCard from "../../components/admin/StatCard";

export default function Dashboard() {
  return (
    <AdminLayout>
      {/* Page Title */}

      <div className="mb-8">
        <h1
          className="
            font-serif
            text-4xl

            text-[#4A0D0D]
          "
        >
          Dashboard
        </h1>

        <p className="mt-2 text-[#721111]/60">
          Overview of your coffee business.
        </p>
      </div>

      {/* Stats */}

      <div
        className="
          grid

          gap-6

          sm:grid-cols-2

          xl:grid-cols-4
        "
      >
        <StatCard title="Total Menu" value="12" icon={Coffee} />

        <StatCard title="Orders" value="54" icon={ShoppingBag} />

        <StatCard title="Customers" value="23" icon={Users} />

        <StatCard title="Revenue" value="RM 1,250" icon={DollarSign} />
      </div>

      {/* Next Row */}

      <div
        className="
          mt-8

          grid

          gap-6

          lg:grid-cols-2
        "
      >
        {/* Recent Orders */}

        <div
          className="
            rounded-3xl

            bg-white/50

            backdrop-blur-xl

            border
            border-white/60

            p-6
          "
        >
          <h2
            className="
              text-xl
              font-semibold

              text-[#4A0D0D]
            "
          >
            Recent Orders
          </h2>
        </div>

        {/* Top Selling */}

        <div
          className="
            rounded-3xl

            bg-white/50

            backdrop-blur-xl

            border
            border-white/60

            p-6
          "
        >
          <h2
            className="
              text-xl
              font-semibold

              text-[#4A0D0D]
            "
          >
            Top Selling Drinks
          </h2>
        </div>
      </div>
    </AdminLayout>
  );
}
