
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ShopGallery from "@/components/ShopGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col sky-gradient">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="card-glass mx-4 md:mx-8 lg:mx-16 my-8 rounded-xl overflow-hidden">
          <FeaturedProducts />
          <ShopGallery />
          <AboutSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
