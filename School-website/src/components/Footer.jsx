import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* University Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">DB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">Dev Bhoomi</h3>
                <p className="text-gray-400 font-nunito">University</p>
              </div>
            </div>
            <p className="text-gray-400 font-nunito leading-relaxed">
              Empowering minds, shaping futures. Dev Bhoomi University has been a beacon of excellence 
              in higher education for over five decades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Academics',
                'Admissions',
                'Campus Life',
                'Research',
                'Faculty',
                'Alumni',
                'Career Services'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors font-nunito flex items-center space-x-2"
                  >
                    <span>{link}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Popular Programs</h4>
            <ul className="space-y-3">
              {[
                'Computer Science',
                'Business Administration',
                'Engineering',
                'Medicine',
                'Law',
                'Arts & Humanities',
                'Social Sciences',
                'Architecture'
              ].map((program) => (
                <li key={program}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors font-nunito"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-nunito text-gray-400">
                    Dev Bhoomi University Campus<br />
                    Dehradun, Uttarakhand<br />
                    India - 248007
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-nunito text-gray-400">+91 1800 103 4049</p>
                  <p className="font-nunito text-gray-400">+91 135 267 0000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-nunito text-gray-400">info@dbuu.ac.in</p>
                  <p className="font-nunito text-gray-400">admissions@dbuu.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6 font-poppins">Visit Our Campus</h4>
              <p className="text-gray-400 font-nunito mb-6 leading-relaxed">
                Experience our state-of-the-art facilities and beautiful campus. Schedule a visit 
                or take a virtual tour to see what makes Dev Bhoomi University special.
              </p>
              <div className="space-y-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Campus Visit
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors ml-4">
                  Virtual Tour
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-400 font-nunito">Interactive Campus Map</p>
                  <p className="text-gray-500 text-sm font-nunito mt-2">Click to explore our campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-nunito">
              © 2024 Dev Bhoomi University. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-nunito">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-nunito">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-nunito">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-nunito">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;