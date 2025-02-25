import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner1.png'; 
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


  const slides = [
    {
      tagline: 'Mental health matters as much as physical health',
      description: 'Prioritize your mental well-being for a healthier and happier life.',
      image: banner1, 
      bgColor: 'bg-blue-900', 
    },
    {
      tagline: 'Seeking help is strength, not stigma – lets break the taboo.',
      description: 'Break the stigma and reach out for professional support.',
      image: banner2, 
      bgColor: 'bg-pink-700', 
    },
    {
      tagline: 'You are not alone – support, heal, and thrive together.',
      description: 'Small steps toward mental wellness can lead to big changes.',
      image: banner3, 
      bgColor: 'bg-purple-800', 
    },
  ];

  
  const changeSlide = (direction) => {
    setIsAnimating(true); 
    setTimeout(() => {
      setCurrentSlide((prev) =>
        direction === 'next'
          ? (prev + 1) % slides.length
          : prev === 0
          ? slides.length - 1
          : prev - 1
      );
      setIsAnimating(false); 
    }, 300); 
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide('next');
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div id="home" className={`relative h-[550px] overflow-hidden ${slides[currentSlide].bgColor}`}>

    <div className={`relative h-[550px] overflow-hidden ${slides[currentSlide].bgColor}`}>
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-full px-6">
   
        <div
          className={`w-full lg:w-1/2 flex justify-center transition-all duration-300 ${
            isAnimating ? 'opacity-0 translate-y-[20px] lg:translate-y-0 lg:translate-x-[20px]' : 'opacity-100 translate-y-0 lg:translate-x-0'
          }`}
        >
          <img
            src={slides[currentSlide].image}
            alt="Slide"
            className="rounded-lg max-w-full h-auto"
          />
        </div>

  
        <div
          className={`w-full lg:w-1/2 space-y-4 transition-all duration-300 text-center mt-6 lg:mt-0 ${
            isAnimating ? 'opacity-0 translate-y-[20px] lg:translate-y-0 lg:translate-x-[-20px]' : 'opacity-100 translate-y-0 lg:translate-x-0'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            {slides[currentSlide].tagline}
          </h2>
          <p className="text-lg text-white">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

 
      <button
        onClick={() => changeSlide('prev')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={() => changeSlide('next')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
    </div>
  );
};

export default Carousel;