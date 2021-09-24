import React, { useEffect, useState } from 'react';

import styles from './ResultsPage.module.css';
import { Answer } from './GamePage';
import htmlDecode from '../utils/htmlDecode';

const ResultsPage : React.FC<Props> = ({results}): React.ReactElement => {
   const [score, setScore] = useState(0);
   useEffect(() => {
      let scoreTmp = 0;
      results.forEach(a => {
         if(a.question.correct_answer === a.answer) {
            scoreTmp++;
         }
      });
      setScore(scoreTmp);
   }, [results]);

   return (
      <div className={styles.container}>
         <div className={styles.youScored}>You score {score} of 10</div>
         {results.map((r: Answer) => (
            <div className={styles.result} key={r.question.question}>
               {r.question.correct_answer === r.answer ? <span>✔️</span> : <span>❌</span>}
               {htmlDecode(r.question.question)}
            </div>
         ))}
      </div>
   );
};

interface Props {
    results: Answer[];
}

export default ResultsPage;