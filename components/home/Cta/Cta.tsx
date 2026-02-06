import Link from "next/link";
import styles from "./Cta.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.title}>Ready to start?</h2>
      <Link href="/contact" className={styles.button}>
        Contact us
      </Link>
    </section>
  );
}