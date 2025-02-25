import React, { useState, useEffect, useRef } from 'react';

const WhyMentalHealth = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

 
  const stats = [
    { number: 46, unit: 'M', description: 'people are suffering from depression in India' },
    { number: 1, unit: '', description: 'in 4 people experience mental health issues' },
    { number: 50, unit: '%', description: 'of mental health conditions begin by age 14' },
    { number: 800, unit: 'K', description: 'people die by suicide every year' },
  ];

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="why-mental-health" ref={sectionRef} className="bg-blue-200 py-16">
    <div ref={sectionRef} className="bg-blue-200 py-16">
      <div className="container mx-auto px-6">
      
        <h2
          className={`text-4xl font-bold text-center text-blue-900 mb-12 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Why Mental Health is Important
        </h2>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center space-y-4 transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
           
              <div className="w-32 h-32 rounded-full bg-blue-900 flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-blue-200">
                  {isVisible ? <AnimatedNumber value={stat.number} /> : 0}
                  <span className="text-2xl">{stat.unit}</span>
                </span>
              </div>

            
              <p className="text-lg text-blue-900 text-center">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-blue-800 rounded-lg p-8 mx-auto max-w-[75%] shadow-md shadow-blue-500 ">
            <p className="text-lg text-blue-200 text-center">
            Mental health is crucial for overall well-being, affecting thoughts, emotions, and daily life. It shapes stress management, relationships, and decisions. Like physical health, it needs care. Ignoring it leads to distress and reduced productivity. Breaking stigma, seeking help, and practicing self-care foster resilience, happiness, and a balanced, fulfilling life.            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < value) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 50); 
      return () => clearInterval(interval);
    }
  }, [count, value]);

  return <span>{count}</span>;
};

export default WhyMentalHealth;