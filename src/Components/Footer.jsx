import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
            <div className='flex items-center gap-1'>
          <img
            src="https://s3-alpha-sig.figma.com/img/03bd/8cfe/a381ccfb09f47f5de0ae570bce7e6ce5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fypLTfYiR9WgmxCGsAIZYvQH-1dqS8fhfxln31BC1qnSMfJWxYRzRA8XMZ6WGP3~U5lqLToPhEdabsN85kMbdmrIJVff0BWki8~hK8uXCt1gBQYolocyumt9b0AbRM8gEQKjWis7xeYIpSwHaTJBGpJ0EvzhnitiIWBcDtGIGmIFRhJPTdJrON40QCwC8Z2u3-XMR4iVdIOX991hhudv5xmFKyAw~mTyVNl4ZrLED4pDfg3JnmVx-R7Cd56YxnrCrEbaqxN654~JOzE6Iu7SYaF81zJ3L0nloHYeWSu7Rd42J2eE-TVVa0I1qyxhXATMFh6j-BQhfhiJXiKOxltUBA__"
            alt="Company Logo"
            className="mb-4 w-12"
          /> 
          <h1 className='text-2xl font-bold pb-6'>PaPaPet</h1>
          </div>
          <p className="text-black">
            PaPaPet is a pet store that sells pet supplies, food, and accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="text-black space-y-2">
            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="#" className="hover:text-purple-500">About Us</a></li>
            <li><a href="#" className="hover:text-purple-500">Services</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="text-black space-y-2">
            <li><a href="#" className="hover:text-purple-500">Blog</a></li>
            <li><a href="#" className="hover:text-purple-500">Food & Accessories</a></li>
            <li><a href="#" className="hover:text-purple-500">Pet Supplies</a></li>
            <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
                <a href="#" className="text-black hover:text-purple-500">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
                    <a href="#" className="text-black hover:text-purple-500">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-black hover:text-purple-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
                <a href="#" className="text-black hover:text-purple-500">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-black">
        &copy; {new Date().getFullYear()} PaPaPet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;