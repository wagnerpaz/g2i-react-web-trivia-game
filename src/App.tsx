import React, { useState } from 'react';

import './App.css';
import MainLayout from './layouts/MainLayout';
import GamePage, { Answer } from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';
import WelcomePage from './pages/WelcomePage';

function App(): React.ReactElement {
   const [step, setStep] = useState<Step>(Step.WELCOME);
   const [results, setResults] = useState<Answer[]>();

   const renderButtons = () => {
      if(step === Step.WELCOME)
         return <a href="#" className="btn singleButton" onClick={() => setStep(Step.GAME)}>Begin</a>;
      
      if (step === Step.GAME)
         return <a href="#" className="btn singleButton" onClick={() => setStep(Step.WELCOME)}>Restart</a>;

      if (step === Step.RESULTS)
         return <a href="#" className="btn singleButton" onClick={() => setStep(Step.WELCOME)}>Play Again?</a>;
   };

   const renderContent = () => {
      if(step === Step.WELCOME)
         return <WelcomePage />;
      
      if (step === Step.GAME)
         return <GamePage onGameEnded={(answers) => {
            setResults(answers);
            setStep(Step.RESULTS);
         }} />;

      if(step === Step.RESULTS)
         return <ResultsPage />;
   };

   return (
      <MainLayout buttons={renderButtons()}>
         {renderContent()}
      </MainLayout>
   );
}

enum Step {
   WELCOME,
   GAME,
   RESULTS
}

export default App;
