import About from "@/components/about";
import Contact from "@/components/contact";
import HeroSlider from "@/components/heroSlider";
import Infra from "@/components/infra";
import Infratech from "@/components/infratech";
import Map from "@/components/map";
import News from "@/components/newss";
import Partner from "@/components/partner";
import Vacanci from "@/components/vacanci";

export default function HomePage() {
  return (
    <div className="pb-20 bg-white">
      <HeroSlider />
      <About/>
      <Infra/>
      <Map/>
      <Infratech/>
      <Partner/>
      <News/>
      <Vacanci/>
      <Contact/>
    </div>
  );
}