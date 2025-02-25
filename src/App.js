import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import WhyMentalHealth from './components/WhyMentalHealth';
import CommonDisorders from './components/CommonDisorders';
import Symptoms from './components/Symptoms';
import WellnessActivities from './components/WellnessActivities';
import Remedies from './components/Remedies';
import QuizLanding from './components/QuizLanding';
import Quiz from './pages/Quiz'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <WhyMentalHealth />
              <CommonDisorders />
              <Symptoms />
              <WellnessActivities />
              <Remedies />
              <QuizLanding />
            </>
          }
        />
        <Route path="/quiz" element={<Quiz />} /> 
      </Routes>
    </Router>
  );
}

export default App;