
import { Facebook, Instagram, Mail, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/9815122024', '_blank');
  };

  return (
    <footer className="bg-textile-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-semibold mb-2">Paiyun Kalika</h3>
              <p className="text-textile-300 text-sm">Textile Traders</p>
            </div>
            <p className="text-textile-300 mb-6 max-w-md">
              Leading importer and supplier of premium fabrics from China and India to Nepal's garment manufacturing industry.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1F8nuRHdn4/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-textile-800 hover:bg-textile-700 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-textile-800 hover:bg-textile-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:8848sandip@gmail.com" className="bg-textile-800 hover:bg-textile-700 p-2 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp();
                }}
                className="bg-textile-800 hover:bg-textile-700 p-2 rounded-full transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="tel:+9779857038475" className="bg-textile-800 hover:bg-textile-700 p-2 rounded-full transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-textile-300 hover:text-white transition-colors">PSY PK Fabric</a></li>
              <li><a href="#products" className="text-textile-300 hover:text-white transition-colors">Super Polly</a></li>
              <li><a href="#products" className="text-textile-300 hover:text-white transition-colors">Honeycomb Fabric</a></li>
              <li><a href="#products" className="text-textile-300 hover:text-white transition-colors">NSY Fabric</a></li>
              <li><a href="#products" className="text-textile-300 hover:text-white transition-colors">Wrinkle Fabric</a></li>
              <li><a href="#products" className="text-textile-300 hover:text-white transition-colors">Sports Fabrics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-textile-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-textile-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#gallery" className="text-textile-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-textile-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-textile-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-textile-800 mt-12 pt-8 text-center">
          <p className="text-textile-400 text-sm">
            &copy; {new Date().getFullYear()} Paiyun Kalika Textile Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
