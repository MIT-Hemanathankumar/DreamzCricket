'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './term.module.css'; // ✅ CSS module

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.termsContainer}>
        <h1 className={styles.title}>Terms & Conditions</h1>

        <p className={styles.paragraph}>
          Welcome to DreamzCricket! These terms and conditions outline the rules and regulations for the use of our platform.
        </p>

        <h4 className={styles.sectionTitle}>1. Acceptance of Terms</h4>
        <p className={styles.paragraph}>
          By accessing and using DreamzCricket, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h4 className={styles.sectionTitle}>2. Eligibility</h4>
        <p className={styles.paragraph}>
          You must be at least 18 years of age and capable of entering into a legally binding agreement to use DreamzCricket.
        </p>

        <h4 className={styles.sectionTitle}>3. Account Registration</h4>
        <p className={styles.paragraph}>
          You may be required to register for an account to access certain features. You are responsible for keeping your account secure.
        </p>

        <h4 className={styles.sectionTitle}>4. Game Rules</h4>
        <p className={styles.paragraph}>
          All users are expected to adhere to the rules of the game, which are subject to updates. Any form of cheating will result in termination.
        </p>

        <h4 className={styles.sectionTitle}>5. Payments and Winnings</h4>
        <p className={styles.paragraph}>
          Payments are made via our secure payment gateway. Winnings will be credited to your registered account as per the payout schedule.
        </p>

        <h4 className={styles.sectionTitle}>6. Termination</h4>
        <p className={styles.paragraph}>
          We reserve the right to suspend or terminate your account at any time for breach of terms or suspicious activity.
        </p>

        <h4 className={styles.sectionTitle}>7. Changes to Terms</h4>
        <p className={styles.paragraph}>
          DreamzCricket may revise these terms at any time. Continued use of the platform implies acceptance of any changes.
        </p>

        <h4 className={styles.sectionTitle}>8. Contact Us</h4>
        <p className={styles.paragraph}>
          If you have any questions about these Terms, please contact us at <a href="/contact" className={styles.link}>Contact Page</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
