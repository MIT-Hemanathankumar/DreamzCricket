'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
