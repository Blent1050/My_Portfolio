import React from "react";

// Components
import { Contact } from "../../contact/Contact";
import { HomeContent } from "./HomeContent";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="homepage">
      <article>
        <section className="intro">
          <p>
            I create <span>Scale-able</span>, <span>Maintainable</span>, and{" "}
            <span>Fast</span> applications <br /> with{" "}
            <span className="reactSpan">React</span> and{" "}
            <span className="nodeSpan">Node</span>.
          </p>
        </section>
      </article>
      <article className="intro-text">
        <section className="intro-2">
          <p>
            I'm Brandon, a Full-stack developer from <span>Florida</span>. I've
            been developing for over 2 years.
          </p>
        </section>
        <section className="intro-2">
          <p>
            I've worked remotely throughout that time on a number of exciting
            projects with startups and established companies.
          </p>
        </section>
        <section className="intro-2">
          <p>
            These clients are located all over the world. From India and France,
            to the United States.
          </p>
        </section>
      </article>
      <article className="home-content">
        <HomeContent />
      </article>
      {/* <article className="contact-container">
        <Contact />
      </article> */}
    </div>
  );
};
