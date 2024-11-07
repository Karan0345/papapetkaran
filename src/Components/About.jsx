// import React from 'react';
// import { TextGenerateEffect } from './TextGenerateEffect'; // Assuming you have this component in the same directory

// function About() {
//   return (
//     <div className='bg-zinc-500 py-16'>
//       <div className='container mx-auto px-6 lg:px-20'>
//         <div className='flex flex-col lg:flex-row items-center'>
//           <div className='lg:w-1/2 mb-10 lg:mb-0'>
//             <img src="https://i.pinimg.com/736x/91/45/1d/91451db587d46658da27a2fb94c4f31d.jpg" alt="Our Team" className="rounded-lg shadow-lg w-full h-auto object-cover" />
//           </div>
//           <div className='lg:w-1/2 lg:pl-12'>
//            <h1 className='text-4xl text-white font-bold  mb-6'>About Us</h1>
//            <TextGenerateEffect
//               words="Papapet, established in 2020, is a global pet products company offering over 150 high-quality items to pet owners in more than 30 countries. With a team of 50 dedicated employees, the company has proudly served over 100,000 satisfied customers, focusing on enhancing the happiness and well-being of pets. Papapet’s mission is to provide innovative, safe, and reliable products, ensuring pets get the best care possible. Alongside its diverse product range, the company offers 24/7 customer support, ensuring seamless service. Papapet also maintains an active presence on five major social media platforms, engaging with pet lovers worldwide."
//               className="text-lg text-black mb-4"
//             />
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect'; // Assuming you have this component in the same directory

function About() {
  return (
    <div className='bg-zinc-500 py-16'>
      <div className='container mx-auto px-6 lg:px-20'>
        <div className='flex flex-col lg:flex-row items-center'>
          <motion.div
            className='lg:w-1/2 mb-10 lg:mb-0'
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
              transition: { duration: 0.3 }
            }}
          >
            <img
              src="https://i.pinimg.com/736x/91/45/1d/91451db587d46658da27a2fb94c4f31d.jpg"
              alt="Our Team"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          <div className='lg:w-1/2 lg:pl-12'>
            <h1 className='text-4xl text-white font-bold mb-6'>About Us</h1>
            <TextGenerateEffect
              words="Papapet, established in 2020, is a global pet products company offering over 150 high-quality items to pet owners in more than 30 countries. With a team of 50 dedicated employees, the company has proudly served over 100,000 satisfied customers, focusing on enhancing the happiness and well-being of pets. Papapet’s mission is to provide innovative, safe, and reliable products, ensuring pets get the best care possible. Alongside its diverse product range, the company offers 24/7 customer support, ensuring seamless service. Papapet also maintains an active presence on five major social media platforms, engaging with pet lovers worldwide."
              className="text-lg text-black mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;