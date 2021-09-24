import React, { useState } from 'react';

import './App.css';
import MainLayout from './layouts/MainLayout';
import GamePage from './pages/GamePage';
import WelcomePage from './pages/WelcomePage';

function App(): React.ReactElement {
   const [step, setStep] = useState<Step>(Step.WELCOME);

   const renderButtons = () => {
      if(step === Step.WELCOME)
         return <a href="#" className="btn singleButton" onClick={() => setStep(Step.GAME)}>Begin</a>;
      
      if (step === Step.GAME)
         return <a href="#" className="btn singleButton" onClick={() => setStep(Step.WELCOME)}>Restart</a>;
   };

   const renderContent = () => {
      if(step === Step.WELCOME)
         return <WelcomePage />;
      
      if (step === Step.GAME)
         return <GamePage />;
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
