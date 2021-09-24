import React, { useEffect, useState } from 'react';
import useQuestions, { Question } from '../sdk/hooks/useQuestions';

import styles from './GamePage.module.css';

const GamePage: React.FC<Props> = ({onGameEnded}): React.ReactElement => {
   const {questions, loading} = useQuestions();
   const [questionNumber, setQuestionNumber] = useState(0);
   const [answers, setAnswers] = useState<Answer[]>([]);

   const currentQuestion = questions[questionNumber];

   const onAnswerPressed = (answer: boolean) => {
      setAnswers(answers => [...answers, {question: currentQuestion, answer}]);
      setQuestionNumber(questionNumber => questionNumber + 1);
   };

   useEffect(() => {
      if(!loading && (questionNumber >= 9 || questionNumber >= questions.length - 1)) {
         onGameEnded(answers);
      }
   }, [loading, questionNumber, questions, answers]);
   
   return (
      <div className={styles.container}>
         {currentQuestion &&
         <>
            <div className={styles.btnsContainer}>
               <a href="#" className={`btn ${styles.btnFalse}`} onClick={() => onAnswerPressed(false)}>❌</a>
            </div>
            <div key={questionNumber} className={styles.card}>
               <span className={styles.category}>{currentQuestion.category}</span>
               <span>{htmlDecode(currentQuestion.question)}</span>
               <span className={styles.questionNumber}>{questionNumber} of 10</span>
            </div>
            <div className={styles.btnsContainer}>
               <a href="#" className={`btn ${styles.btnTrue}`} onClick={() => onAnswerPressed(true)}>✔️</a>
            </div>
         </>
         }
      </div>
   );
};

function htmlDecode(input: string) {
   const doc = new DOMParser().parseFromString(input, 'text/html');
   return doc.documentElement.textContent;
}

interface Props {
   onGameEnded: (answers: Answer[]) => void;
}

export interface Answer {
   question: Question;
   answer: boolean;
}

export default GamePage;
