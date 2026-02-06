import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";

export default function Hero() {
  return (
    <Section>
      <Container>
        <h1>Welcome to our site</h1>
        <p>We build modern web applications</p>

        <Button href="/contact" size="lg">
          Contact us
        </Button>
      </Container>
    </Section>
  );
}