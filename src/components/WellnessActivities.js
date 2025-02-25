import React, { useState, useEffect, useRef } from 'react';
import Exercise from '../assets/Exercise.jpeg';
import Yoga from '../assets/Yoga.jpeg';
import Meditation from '../assets/Meditation.jpg';
import Nutrition from '../assets/Nutrition.jpg';
import Sleep from '../assets/Sleep.jpg';

const WellnessActivities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  
  const activities = [
    {
      id: 1,
      image: Exercise, 
      title: 'Exercise',
      description: 'Regular physical activity can improve your mood and reduce stress.',
    },
    {
      id: 2,
      image: Meditation, 
      title: 'Meditation',
      description: 'Practice mindfulness to calm your mind and improve focus.',
    },
    {
      id: 3,
      image: Yoga, 
      title: 'Yoga',
      description: 'Combine physical postures, breathing exercises, and meditation.',
    },
    {
      id: 4,
      image: Sleep, 
      title: 'Sleep',
      description: 'Prioritize quality sleep to rejuvenate your mind and body.',
    },
    {
      id: 5,
      image: Nutrition, 
      title: 'Nutrition',
      description: 'Eat a balanced diet to support mental and physical health.',
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
    <div id="wellness-activities" ref={sectionRef} className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 py-16">
      <div className="container mx-auto px-6">
        
        <h2
          className={`text-4xl font-bold text-center text-blue-900 mb-12 transition-opacity duration-1000 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'
          }`}
        >
          Wellness Activities
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'
              }`}
            >
              
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover"
              />

              
              <h3 className="text-xl font-bold text-center text-blue-900 mt-4">
                {activity.title}
              </h3>

             
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center p-4">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnessActivities;