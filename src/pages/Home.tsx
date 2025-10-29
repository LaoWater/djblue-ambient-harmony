import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Philosophy } from "@/components/Philosophy";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <UseCases />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
