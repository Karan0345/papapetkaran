
import React from 'react';
import { FaDog, FaStethoscope, FaHome, FaWalking, FaSpa, FaCat, FaCar } from 'react-icons/fa';

const services = [
  { title: "Pet Training", icon: <FaDog />, description: "Professional training for all breeds." },
  { title: "Veterinary Care", icon: <FaStethoscope />, description: "Expert medical care for your pets." },
  { title: "Pet Boarding", icon: <FaHome />, description: "Safe and comfortable stay for your pets." },
  { title: "Dog Walking", icon: <FaWalking />, description: "Regular exercise and outdoor activities." },
  { title: "Grooming & Spa", icon: <FaSpa />, description: "Complete grooming and spa treatments." },
  { title: "Food & Accessories", icon: <FaCat />, description: "Professional product for your pets." },
];

function Services() {
  return (
    <div className= 'bg-white w-full min-h-screen py-20'>
      <h1 className='text-black text-5xl font-bold justify-center items-center flex mb-12'>Our Services</h1>
      <div className='flex flex-wrap justify-center gap-20'>
        {services.map((service, index) => (
          <div 
            key={index} 
            className='card w-80 h-72 bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
          >
            <div className='text-4xl text-purple-600 mb-4'>
              {service.icon}
            </div>
            <h2 className='text-xl text-black font-bold mb-2'>{service.title}</h2>
            <p className='text-gray-600 text-center mb-4'>{service.description}</p>
            <button className='bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 mt-auto'>
              Get Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;