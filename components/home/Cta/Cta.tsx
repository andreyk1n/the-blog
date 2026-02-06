import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";
import styles from "./Cta.module.css";

export default function CTA() {
  return (
    <Section>
      <Container>
        <div className={styles.cta}>
          <h2 className={styles.title}>Ready to start?</h2>

          <Button href="/contact" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </Section>
  );
}
