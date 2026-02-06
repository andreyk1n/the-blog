import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import styles from "./Features.module.css";

const features = [
  "Fast performance",
  "SEO friendly",
  "Scalable architecture",
];

export default function Features() {
  return (
    <Section>
      <Container>
        <div className={styles.features}>
          <h2 className={styles.title}>Features</h2>

          <ul className={styles.list}>
            {features.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
