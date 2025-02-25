import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import quizImage from '../assets/quiz.jpg';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(15).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  
  const questions = [
    'I feel sad most of the time.',
    'I have trouble concentrating.',
    'I feel anxious or worried often.',
    'I dont enjoy socializing with others.',
    'I feel tired or low on energy.',
    'I have trouble sleeping.',
    'I dont feel confident in my abilities.',
    'I feel overwhelmed by my responsibilities.',
    'I dont feel supported by my friends and family.',
    'I feel fatigue or down often.',
    'I dont feel motivated to achieve my goals.',
    'I feel irritable or angry often.',
    'I dont feel at peace with myself.',
    'I feel like I have no control over my life.',
    'I dont feel optimistic about the future.',
  ];

  
  const handleOptionSelect = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    setSelectedOption(value);

    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

 
  const calculateResult = () => {
    const totalScore = answers.reduce((sum, value) => sum + (value || 0), 0);
    if (totalScore <= 30) {
      return {
        text: 'Low Risk: You seem to be in a good mental state. Keep taking care of yourself!',
        emoji: '😊',
      };
    } else if (totalScore <= 45) {
      return {
        text: 'Moderate Risk: You may be experiencing some mental health challenges. Consider seeking support.',
        emoji: '😐',
      };
    } else {
      return {
        text: 'High Risk: You may be experiencing significant mental health challenges. Please consult a professional.',
        emoji: '😔',
      };
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500 min-h-screen relative">
    
     
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${quizImage})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
       
        <div className="text-center pt-6 mb-8">
          <p className="text-lg text-white">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

      
        {!showResult ? (
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {questions[currentQuestion]}
            </h3>

           
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="flex flex-col items-center">
                  <button
                    onClick={() => handleOptionSelect(value)}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black flex items-center justify-center transition-colors ${
                      selectedOption === value
                        ? 'bg-blue-900' 
                        : 'bg-white hover:bg-blue-700' 
                    }`}
                  ></button>
                  <p className="text-white font-bold mt-2 text-sm md:text-base">
                    {value === 1 && 'Strongly Disagree'}
                    {value === 2 && 'Disagree'}
                    {value === 3 && 'Neutral'}
                    {value === 4 && 'Agree'}
                    {value === 5 && 'Strongly Agree'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
         
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Your Result
            </h3>
            <p className="text-6xl mb-4">{calculateResult().emoji}</p>
            <p className="text-xl md:text-2xl text-white">{calculateResult().text}</p>
            <button
              onClick={() => navigate('/')}
              className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;