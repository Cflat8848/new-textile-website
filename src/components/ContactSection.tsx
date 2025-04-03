
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/9815122024?text=${whatsappMessage}`, '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/9815122024', '_blank');
  };

  const openMapLocation = () => {
    // Open with the new link
    window.open('https://maps.app.goo.gl/nn945Ls5VPQ7Tpnq5', '_blank');
    // Show coordinates in alert
    alert('Shop coordinates: 27.6964417, 83.4670627');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-textile-800 mb-4">
            Contact Us
          </h2>
          <p className="text-textile-600 max-w-2xl mx-auto">
            Interested in our fabrics? Reach out to us for inquiries, quotes, or to discuss your specific requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-textile-50 p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-textile-800">Get In Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-textile-700 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-textile-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-textile-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Subject of your message" 
                  className="bg-white"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-textile-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5}
                  className="bg-white"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-fabric-700 hover:bg-fabric-800 text-white">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send on WhatsApp
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-textile-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-fabric-700" />
                </div>
                <div>
                  <h4 className="font-medium text-textile-800 mb-1">Address</h4>
                  <p className="text-textile-600">
                    Kalikanagar, Butwal<br />
                    Rupandehi District<br />
                    Nepal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="w-5 h-5 text-fabric-700" />
                </div>
                <div>
                  <h4 className="font-medium text-textile-800 mb-1">Phone</h4>
                  <p className="text-textile-600">
                    +977 9857038475<br />
                    +977 9764341987
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <a 
                  href="https://wa.me/9815122024" 
                  className="flex items-start hover:text-fabric-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openWhatsApp}
                >
                  <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MessageSquare className="w-5 h-5 text-fabric-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-textile-800 mb-1">WhatsApp</h4>
                    <p className="text-textile-600">
                      +977 9815122024
                    </p>
                  </div>
                </a>
              </div>
              
              <div className="flex items-start">
                <a 
                  href="mailto:8848sandip@gmail.com" 
                  className="flex items-start hover:text-fabric-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-5 h-5 text-fabric-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-textile-800 mb-1">Email</h4>
                    <p className="text-textile-600">
                      8848sandip@gmail.com
                    </p>
                  </div>
                </a>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="w-5 h-5 text-fabric-700" />
                </div>
                <div>
                  <h4 className="font-medium text-textile-800 mb-1">Business Hours</h4>
                  <p className="text-textile-600">
                    Sunday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps location */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl font-semibold mb-6 text-textile-800 text-center">Our Location</h3>
          <div 
            className="w-full h-96 rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={openMapLocation}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8627029797996!2d83.4670627!3d27.6964417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936d7c72e6284d%3A0x8a2a59e513c2ec4b!2sSarswoti%20Fabric%20House!5e0!3m2!1sen!2snp!4v1712490010662!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Paiyun Kalika Textile Traders Location"
              aria-label="Google Maps location of Paiyun Kalika Textile Traders"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
