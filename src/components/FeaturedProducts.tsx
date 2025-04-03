
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  fabricTypes: string[];
}

const ProductCard = ({ name, description, imageUrl, fabricTypes }: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden border border-textile-100 transition-all duration-300 hover:shadow-md">
      <div 
        className="aspect-video bg-textile-50 overflow-hidden cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-textile-800">{name}</h3>
        <p className="text-textile-600 text-sm mb-3">{description}</p>
        
        <div className="mt-3">
          <h4 className="font-medium text-textile-700 text-sm mb-2">Suitable for:</h4>
          <ul className="text-sm text-textile-600 list-disc pl-5 space-y-1">
            {fabricTypes.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </CardContent>

      {/* Image Modal */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setIsExpanded(false)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              ✕
            </button>
            <div className="bg-white p-4 rounded-lg">
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4">
                <h3 className="font-serif text-xl font-semibold mb-2 text-textile-800">{name}</h3>
                <p className="text-textile-600 text-sm mb-3">{description}</p>
                
                <div className="mt-3">
                  <h4 className="font-medium text-textile-700 mb-2">Suitable for:</h4>
                  <ul className="text-textile-600 list-disc pl-5 space-y-1">
                    {fabricTypes.map((type, index) => (
                      <li key={index}>{type}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      name: "PSY PK Fabric",
      description: "High-quality polyester fabric with excellent durability and color retention.",
      imageUrl: "/lovable-uploads/493507fb-d08a-44b5-ae17-7736eb3ce961.png",
      fabricTypes: ["Formal t-shirt", "Fancy wear", "School dress", "Office wear"]
    },
    {
      name: "Super Polly",
      description: "Versatile polyester blend with enhanced softness and breathability.",
      imageUrl: "/lovable-uploads/49b8d078-1ba0-4087-8a8c-58787cfc65ad.png",
      fabricTypes: ["Track suit", "Jacket", "Outer wear", "Trekking wear"]
    },
    {
      name: "Honeycomb Fabric",
      description: "Textured fabric with distinctive honeycomb pattern, ideal for sportswear.",
      imageUrl: "/lovable-uploads/7cddec15-ffd1-4343-985b-4bf7b72263a8.png",
      fabricTypes: ["Sports jerseys", "Polo shirts", "Performance wear", "Golf apparel", "Custom collars"]
    },
    {
      name: "NSY Fabric",
      description: "Premium synthetic fabric known for its smooth texture and performance features.",
      imageUrl: "/lovable-uploads/16d67d17-d5da-49b6-b17f-1c4ec20fb34e.png",
      fabricTypes: ["Formal pants", "Business attire", "Professional uniforms", "Durable workwear"]
    },
    {
      name: "Wrinkle Fabric",
      description: "Specialized fabric with intentional texture, adding visual interest to garments.",
      imageUrl: "/lovable-uploads/5894a7e7-07a8-4862-ad0a-203657833e88.png",
      fabricTypes: ["Hoodies", "Sweatshirts", "Winter wear", "Custom rib designs", "Textured apparel"]
    },
    {
      name: "Sports Fabrics",
      description: "Durable knitted fabric, perfect for comfortable and long-lasting garments.",
      imageUrl: "/lovable-uploads/08d378d7-aeff-4af2-a022-7f75a85218f9.png",
      fabricTypes: ["Woolen shirts", "Thermal wear", "Activewear", "Athletic apparel", "Moisture-wicking garments"]
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-textile-800 mb-4">
            Our Premium Fabrics
          </h2>
          <p className="text-textile-600 max-w-2xl mx-auto">
            We import a wide range of high-quality fabrics from China and India to support Nepal's growing garment manufacturing industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl font-semibold text-textile-800 mb-4">Specialized Fabric Applications</h3>
          <div className="bg-textile-50 p-6 rounded-lg max-w-3xl mx-auto">
            <ul className="text-textile-700 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-left">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Sweatshirt & Hoodie fabrics
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Formal pant materials
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Custom rib designs
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Collar & cuff materials
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Woolen shirt fabrics
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Performance sportswear
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Breathable athletic materials
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Moisture-wicking fabrics
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Thermal & winter wear textiles
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-fabric-700 rounded-full mr-2"></span>
                Durable workwear materials
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
