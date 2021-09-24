import React from 'react';
import styles from './WelcomePage.module.css';

const WelcomePage: React.FC = (): React.ReactElement => {
   return (
      <div className={styles.mainBox}>
         <span className={styles.line1}>You will be presented with <strong>10</strong> questions.</span>
         <span className={styles.line2}>True✔️ or False❌</span>
         <span className={styles.line3}>Can you score 100%?</span>
      </div>
   );
};

export default WelcomePage;
