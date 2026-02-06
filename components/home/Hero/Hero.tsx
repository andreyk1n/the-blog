import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Welcome to our site</h1>
      <p className={styles.subtitle}>
        We build modern web applications with Next.js
      </p>
    </section>
  );
}
