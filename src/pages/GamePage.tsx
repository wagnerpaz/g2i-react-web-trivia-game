import React, { useEffect, useState } from 'react';
import useQuestions, { Question } from '../sdk/hooks/useQuestions';
import htmlDecode from '../utils/htmlDecode';

import styles from './GamePage.module.css';

const GamePage: React.FC<Props> = ({onGameEnded}): React.ReactElement => {
   const {questions, loading, error} = useQuestions();
   const [questionNumber, setQuestionNumber] = useState(0);
   const [answers, setAnswers] = useState<Answer[]>([]);

   const currentQuestion = questions[questionNumber];

   const onAnswerPressed = (answer: boolean) => {
      setAnswers(answers => [...answers, {question: currentQuestion, answer}]);
      setQuestionNumber(questionNumber => questionNumber + 1);
   };

   useEffect(() => {
      if(!loading && !error && (questionNumber >= 10 || questionNumber >= questions.length)) {
         onGameEnded(answers);
      }
   }, [loading, error, questionNumber, questions, answers]);
   
   return (
      <div className={styles.container}>
         {error &&
         <div className={styles.errorBox}>
            <span>An error occurred while fetching data from the server:</span>
            <span>{error.message}</span>
         </div>
         }
         {currentQuestion &&
         <>
            <div key={questionNumber} className={styles.card}>
               <span className={styles.category}>{currentQuestion.category}</span>
               <span>{htmlDecode(currentQuestion.question)}</span>
               <span className={styles.questionNumber}>{questionNumber + 1} of 10</span>
            </div>
            <div className={styles.btnsContainer}>
               <a href="#" className={`btn ${styles.btnFalse}`} onClick={() => onAnswerPressed(false)}>❌</a>
               <a href="#" className={`btn ${styles.btnTrue}`} onClick={() => onAnswerPressed(true)}>✔️</a>
            </div>
         </>
         }
      </div>
   );
};

interface Props {
   onGameEnded: (answers: Answer[]) => void;
}

export interface Answer {
   question: Question;
   answer: boolean;
}

export default GamePage;
