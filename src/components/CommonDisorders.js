import React, { useState, useEffect, useRef } from 'react';

const CommonDisorders = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

 
  const disorders = [
    {
      icon: '😔', 
      description: 'A mood disorder causing persistent sadness and loss of interest.',
    },
    {
      icon: '😰', 
      name: 'Anxiety',
      description: 'Excessive worry or fear that interferes with daily life.',
    },
    {
      icon: '😡', 
      name: 'Bipolar Disorder',
      description: 'Extreme mood swings between mania and depression.',
    },
    {
      icon: '😨', 
      name: 'PTSD',
      description: 'A condition triggered by traumatic events.',
    },
    {
      icon: '🤯', 
      name: 'Schizophrenia',
      description: 'A disorder affecting thinking, feeling, and behavior.',
    },
    {
      icon: '😞', 
      name: 'OCD',
      description: 'Unwanted thoughts and repetitive behaviors.',
    },
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
    <div id="common-disorders" ref={sectionRef} className="bg-purple-200 py-16">
      <div className="container mx-auto px-6">
       
        <h2
          className={`text-4xl font-bold text-center text-purple-900 mb-12 transition-opacity duration-1000 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'
          }`}
        >
          Common Mental Health Disorders
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disorders.map((disorder, index) => (
            <div
              key={index}
              className={`bg-purple-900 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 ${
                isVisible
                  ? index % 2 === 0
                    ? 'animate-slide-in-left'
                    : 'animate-slide-in-right'
                  : 'opacity-0'
              }`}
            >
             
              <div className="text-4xl mb-4">{disorder.icon}</div>

              
              <h3 className="text-2xl font-bold text-purple-200 mb-2">
                {disorder.name}
              </h3>

              
              <p className="text-lg text-purple-200">
                {disorder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonDisorders;