import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Philosophy } from "@/components/Philosophy";

const PhilosophyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <Philosophy showMaintainers />
      </main>
      <Footer />
    </div>
  );
};

export default PhilosophyPage;
