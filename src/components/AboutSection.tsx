
import { MapPin, Users, TrendingUp, Truck } from "lucide-react";

const AboutSection = () => {
  const openMapLocation = () => {
    window.open('https://maps.app.goo.gl/nn945Ls5VPQ7Tpnq5', '_blank');
    alert('Shop coordinates: 27.6964417, 83.4670627');
  };
  
  return (
    <section id="about" className="py-16 md:py-24 bg-textile-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-textile-800 mb-6">
              About Paiyun Kalika Textile Traders
            </h2>
            <p className="text-textile-700 mb-6">
              Founded with a vision to support Nepal's garment industry, Paiyun Kalika Textile Traders has established itself as a leading importer and distributor of high-quality fabrics from China and India.
            </p>
            <p className="text-textile-700 mb-6">
              We specialize in a wide range of fabrics including PSY PK, Super Polly, Honeycomb, NSY, Wrinkle, and Outlander Hosiery. Our experienced team ensures that we source only the finest textiles to meet the diverse needs of Nepali garment manufacturers.
            </p>
            <p className="text-textile-700">
              Located in Butwal, Kalikanagar in Rupandehi district, we are strategically positioned to supply fabric across Nepal efficiently. Our commitment to quality, competitive pricing, and reliable service has made us a trusted partner for garment manufacturers throughout the country.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              className="bg-white p-6 rounded-lg shadow-sm border border-textile-100 cursor-pointer hover:shadow-md transition-shadow" 
              onClick={openMapLocation}
            >
              <div className="w-12 h-12 bg-fabric-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-fabric-700" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-textile-800 underline">Strategic Location</h3>
              <p className="text-textile-600 text-sm">Centrally located in Butwal, Kalikanagar for efficient distribution throughout Nepal.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-textile-100">
              <div className="w-12 h-12 bg-fabric-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-fabric-700" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-textile-800">Expert Team</h3>
              <p className="text-textile-600 text-sm">Our experienced staff ensures premium fabric selection and quality control.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-textile-100">
              <div className="w-12 h-12 bg-fabric-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-fabric-700" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-textile-800">Industry Knowledge</h3>
              <p className="text-textile-600 text-sm">Deep understanding of textile needs for Nepal's garment manufacturing sector.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-textile-100">
              <div className="w-12 h-12 bg-fabric-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-fabric-700" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-textile-800">Reliable Supply</h3>
              <p className="text-textile-600 text-sm">Consistent and dependable fabric supply chain from China and India.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
