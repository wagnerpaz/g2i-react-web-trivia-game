import React from 'react';
import styles from './WelcomePage.module.css';
import MainLayout  from '../layouts/MainLayout';

const WelcomePage = (): React.ReactElement => {
   return (
      <MainLayout buttons={<a href="#" className={`btn ${styles.beginBtn}`}>Begin</a>}>
         <div className={styles.mainBox}>
            <span className={styles.line1}>You will be presented with <strong>10</strong> questions.</span>
            <span className={styles.line2}>True✔️ or False❌</span>
            <span className={styles.line3}>Can you score 100%?</span>
         </div>
      </MainLayout>
   );
};

export default WelcomePage;
