import React from 'react';
import styles from './MainLayout.module.css';

const MainLayout: React.FC<Props> = ({children, buttons}): React.ReactElement => {
   return (
      <div className={styles.container}>
         <header className={styles.header}>
            <div className={styles.logoContainer}>
               <img className={styles.logo} src="logo192.png" />
            </div>
            <div className={styles.titleBox}>
               <h1>
                  <span className={styles.titleIntro}>Welcome to the</span>
                  <span className={styles.titleMain}>Trivia Challenge</span>
               </h1>
            </div>
         </header>
         <main className={styles.main}>
            {children}
         </main>
         {buttons}
      </div>
   );
};

interface Props {
   buttons?: React.ReactElement
}

export default MainLayout;
