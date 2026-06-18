import Navbar from "../components/Navbar";
import HeroSection from "../components/home/Hero";
import MenuBanner from "../components/home/MenuBanner";
import Banner1 from "../components/home/Banner1"
import AboutBanner from "../components/home/AboutBanner";
import Banner2 from "../components/home/Banner2";
import Banner3 from "../components/home/Banner3";
import ContactBanner from "../components/home/ContactBanner";
import Footer from "../components/Footer";

export default function Home() {
    return (
      <div className="min-h-screen overflow-x-hidden bg-[#F6F0E8]">
        <HeroSection />
        <Navbar />
        <Banner1 />
        <MenuBanner />
        <Banner3 /> <AboutBanner />
        <ContactBanner />
        <Banner2 />
        <Footer />
      </div>
    );
}
