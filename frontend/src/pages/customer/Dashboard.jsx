import CustomerLayout from "./CustomerLayout";
import HeroBanner from "../../components/customer/HeroBanner";
import PromotionBanner from "../../components/customer/PromotionBanner";
import PopularDrinks from "../../components/customer/PopularDrinks";

export default function Dashboard() {
  return (
      <CustomerLayout>
          <div className="container mx-auto px-4 py-8">
          <PromotionBanner />
          <HeroBanner />
              <PopularDrinks />
          </div>
      </CustomerLayout>
  );
}

