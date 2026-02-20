import "./Hero.scss";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  children?: ReactNode;
}

const Hero = ({ title, children }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">{title}</h1>

        {children && (
          <div className="hero__image">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;