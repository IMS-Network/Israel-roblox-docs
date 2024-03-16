// HomepageIntro.tsx
import React from 'react';
import styles from './styles.module.css';

const HomepageIntro: React.FC = () => {
  return (
    <div className={styles.homepageSectionIntro}>
      <div className={styles.homepageContainer}>
        <div className={styles.intro}>
          <div className={styles.introSection}>
            <h1 className={styles.introHeader}>
              The complete reference for IOTA and Shimmer
            </h1>
            <p className={styles.introDescription}>
              Build apps capable of taking millions of users on journeys they've never been on before. Simple. Scalable. Secure.
            </p>
            <div className={styles.introButtons}>
              <a className={`${styles.introButton} ${styles.buttonOutline} ${styles.buttonPrimary}`} href="/get-started/introduction/">Introduction</a>
              <a className={`${styles.introButton} ${styles.buttonPrimary}`} href="/build/welcome/">Start building</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageIntro;
