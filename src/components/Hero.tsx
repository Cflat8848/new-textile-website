
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/9815122024', '_blank');
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 sky-gradient opacity-90"></div>
      <div 
        className="relative min-h-[70vh] flex flex-col"
      >
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/5704f6d7-bda1-4bc1-afca-fc7b6df1f714.png" 
                alt="Paiyun Kalika Logo" 
                className="h-24 mb-4 hidden md:block" 
              />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-textile-950">
              Premium Textile <span className="text-fabric-700">Imports</span> for Nepal's Garment Industry
            </h1>
          </div>
        </div>
        
        <div className="w-full">
          <ImageCarousel />
        </div>
        
        <div className="container mx-auto px-4 pb-8 md:pb-12">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl mb-8 text-textile-700 max-w-2xl">
              Sourcing high-quality fabrics from China and India for Nepali garment manufacturers. Your trusted supply partner located in Butwal, Kalikanagar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-fabric-700 hover:bg-fabric-800 text-white"
                size="lg"
              >
                Explore Fabrics
              </Button>
              <Button 
                variant="outline" 
                className="border-textile-300 text-textile-800 bg-white/80 backdrop-blur-sm"
                size="lg"
                onClick={openWhatsApp}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
