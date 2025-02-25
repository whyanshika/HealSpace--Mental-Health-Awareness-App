import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizLanding = () => {
  const navigate = useNavigate();

  return (
    <div id="quiz-landing" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16">
      <div className="container mx-auto px-6 text-center">
       
        <h2 className="text-4xl font-bold text-white mb-8">
          Take a 5-Min Quiz to Know Your Mental Health State
        </h2>

        
        <button
          onClick={() => navigate('/quiz')} 
          className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100 transition-colors"
        >
          Take Me to the Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizLanding;