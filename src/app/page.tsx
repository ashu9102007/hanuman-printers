import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { AdminProvider } from "@/components/AdminContext";

export default function Home() {
  return (
    <AdminProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </AdminProvider>
  );
}
