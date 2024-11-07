import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'Food & Accessories', link: '/food-and-accessories' },
    { name: 'Pet Supplies', link: '/pet-supplies' },
    { name: 'About Us', link: '/about' },
    { name: 'Blogs', link: '/blogs' },

  ];

  return (
    <nav className="bg-gray-100 shadow-sm fixed w-full h-24 p-4 z-50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              className="h-14 w-auto" 
              src="https://s3-alpha-sig.figma.com/img/03bd/8cfe/a381ccfb09f47f5de0ae570bce7e6ce5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fypLTfYiR9WgmxCGsAIZYvQH-1dqS8fhfxln31BC1qnSMfJWxYRzRA8XMZ6WGP3~U5lqLToPhEdabsN85kMbdmrIJVff0BWki8~hK8uXCt1gBQYolocyumt9b0AbRM8gEQKjWis7xeYIpSwHaTJBGpJ0EvzhnitiIWBcDtGIGmIFRhJPTdJrON40QCwC8Z2u3-XMR4iVdIOX991hhudv5xmFKyAw~mTyVNl4ZrLED4pDfg3JnmVx-R7Cd56YxnrCrEbaqxN654~JOzE6Iu7SYaF81zJ3L0nloHYeWSu7Rd42J2eE-TVVa0I1qyxhXATMFh6j-BQhfhiJXiKOxltUBA__" 
              alt="PaPaPet Logo" 
            />
            <h1 className='text-black text-2xl font-bold pb-1'>PaPaPet</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-black">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                whileHover={{ scale: 1.1 }}
                className="text-black hover:text-purple-600 px-3 py-2 rounded-md font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-purple-600 text-white px-4 py-2 rounded-full"
            >
              Register
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center bg-gray-100">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-200 rounded-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-black hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-full">
            Register
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;