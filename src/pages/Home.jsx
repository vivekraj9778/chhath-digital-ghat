import Hero from "../components/Hero/Hero";
import GhatDashboard from "../components/Dashboard/GhatDashboard";
import FestivalGuide from "../components/FestivalGuide/FestivalGuide";
import SamagriCalculator from "../components/SamagriCalculator/SamagriCalculator";
import GhatDirectory from "../components/GhatDirectory/GhatDirectory";
import GhatMap from "../components/GhatMap/GhatMap";
import DistrictAdmin from "../components/Administration/DistrictAdmin";
import GhatGallery from "../components/Gallery/GhatGallery";
import WishGenerator from "../components/WishGenerator/WishGenerator";

export default function Home() {
  return (
    <>
      <Hero />
      <GhatDashboard />
      <FestivalGuide />
      <SamagriCalculator />
      <GhatDirectory />
      <GhatMap />
      <DistrictAdmin />
      <GhatGallery />
      <WishGenerator />
    </>
  );
}
