import AboutPage from '@/components/about/aboutSec';
import HeroSection from '@/components/hero/heroSec';
import Navbar from '@/components/navbar/navbar';
import ProjectPage from '@/components/project/pages';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" flex flex-col gap-8">
        <HeroSection />
        <AboutPage />
        <ProjectPage />
      </main>
    </>
  );
}
