
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center min-h-screen'>
      <div className='w-full h-full absolute'>
        <picture className='absolute w-full h-full object-cover'>
          <source media="(max-width: 768px)" srcSet="https://i.pinimg.com/564x/b4/c0/92/b4c092c5588c1cba7788988a9204ac0f.jpg" />
          <img 
            src="/dog.jpg" 
            alt="hero" 
            className='w-full h-full object-cover' 
          />
        </picture>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 flex items-center justify-center bg-black bg-opacity-10 p-8 w-full h-screen"
      >
        <div className="text-center text-black">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold mb-4 pt-20"
          >
            Welcome to PaPaPet
          </motion.h1>
          <motion.p 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-xl mb-12"
          >
            Your Trusted Partner in Pet Care, <br />Offering Tailored Services to Ensure the Health, Happiness, <br />and Well-Being of Your Beloved Furry Companions.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            Book Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;