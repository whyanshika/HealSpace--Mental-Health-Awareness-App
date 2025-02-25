import React, { useState, useEffect, useRef } from 'react';

const Symptoms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [checkedSymptoms, setCheckedSymptoms] = useState([]);
  const [resultMessage, setResultMessage] = useState('');
  const sectionRef = useRef(null);

 
  const symptoms = [
    {
      icon: '😔', 
      description: 'Persistent sadness or low mood.',
    },
    {
      icon: '😰', 
      description: 'Excessive worry or fear.',
    },
    {
      icon: '😡', 
      description: 'Extreme mood swings.',
    },
    {
      icon: '😨', 
      description: 'Difficulty concentrating.',
    },
    {
      icon: '🤯', 
      description: 'Feeling overwhelmed or stressed.',
    },
    {
      icon: '😞', 
      description: 'Loss of interest in activities.',
    },
    {
      icon: '😴', 
      description: 'Chronic fatigue or low energy.',
    },
    {
      icon: '🛌', 
      description: 'Sleep disturbances (insomnia or oversleeping).',
    },
    {
      icon: '🍽️', 
      description: 'Changes in appetite or weight.',
    },
  ];

  
  const handleCheckboxChange = (index) => {
    if (checkedSymptoms.includes(index)) {
      setCheckedSymptoms(checkedSymptoms.filter((item) => item !== index));
    } else {
      setCheckedSymptoms([...checkedSymptoms, index]);
    }
  };

  
  const handleCheckSymptoms = () => {
    if (checkedSymptoms.length >= 4) {
      setResultMessage('You may have symptoms associated with mental illness. Please consult a doctor for further evaluation.');
    } else {
      setResultMessage('You may not have mental illness. But check our quiz to know more.');
    }
  };

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setResultMessage(''); 
          setCheckedSymptoms([]); 
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
    <div id="symptoms" ref={sectionRef} className="bg-pink-200 py-16">
      <div className="container mx-auto px-6">
        
        <h2
          className={`text-4xl font-bold text-center text-pink-800 mb-12 transition-opacity duration-1000 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'
          }`}
        >
          Symptoms of Mental Illness
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className={`bg-pink-900 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 ${
                isVisible
                  ? index % 2 === 0
                    ? 'animate-slide-in-left'
                    : 'animate-slide-in-right'
                  : 'opacity-0'
              }`}
            >
              
              <div className="text-4xl mb-4">{symptom.icon}</div>

              
              <p className="text-lg text-pink-200 mb-4">
                {symptom.description}
              </p>

              
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={checkedSymptoms.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                  className="form-checkbox h-5 w-5 text-pink-200"
                />
                <span className="text-pink-200">I have this symptom</span>
              </label>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center mt-12">
          <button
            onClick={handleCheckSymptoms}
            className="bg-pink-700 text-white px-8 py-3 rounded-lg hover:bg-pink-800 transition-colors"
          >
            Check for Mental Illness
          </button>
        </div>

        
        {resultMessage && (
          <div className="mt-8 text-center text-white text-lg">
            <p>{resultMessage}</p>
            {checkedSymptoms.length < 4 && (
              <a
                href="#quiz-landing" 
                className="mt-4 inline-block bg-pink-100 text-pink-700 px-6 py-2 rounded-lg hover:bg-pink-800 transition-colors"
              >
                Take the Quiz
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Symptoms;