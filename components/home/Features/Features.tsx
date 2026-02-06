import styles from "./Features.module.css";

const features = [
  "Fast performance",
  "SEO friendly",
  "Scalable architecture",
];

export default function Features() {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>Features</h2>

      <ul className={styles.list}>
        {features.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}