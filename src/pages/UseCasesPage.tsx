import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UseCases } from "@/components/UseCases";

const UseCasesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <UseCases />
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
