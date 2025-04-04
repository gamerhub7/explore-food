import HeroSection from '@/components/HeroSection';
import ChooseSection from '@/components/ChooseSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/footersection';


export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <ChooseSection />
      <MapSection />
     <Footer/>
    </main>
  );
}