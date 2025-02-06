import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

const MegaFooter = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {/* Column 1 - Company Info */}
          <div className='colum'>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-700 hover:text-black">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-black">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-black">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-700 hover:text-black">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Quick Links */}
          <div className='colum'>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-700 hover:text-black">FAQs</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-700 hover:text-black">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-700 hover:text-black">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-700 hover:text-black">Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className='colum'>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl">
                <BsFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl">
                <BsInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl">
                <BsTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>

          {/* Column 4 - Newsletter Signup */}
          <div className='colum'>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-700 mb-4">Sign up for our newsletter to get the latest updates.</p>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 w-full mb-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none"
              />
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 py-4 mt-16 text-center">
        <div className="container mx-auto text-gray-700">
          <p>© 2025 Green Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;
