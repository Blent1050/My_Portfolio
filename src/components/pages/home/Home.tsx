import React from "react";

// Routing
import { Link } from "react-router-dom";

interface HomeProps { }

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="homepage">
      <section>
        <h2>My name is Brandon</h2>
        <p>I'm a Software Developer living in Florida <span role="img" aria-label="Palm Tree Emoji">🌴</span></p>
        <br />
        <p>
          Creating elegant and thoughtful software products fuel my goals of
          continual improvement and client satisfaction.
        </p>
      </section>
      <section className="section-seperator">
        <Link to="/my-work" className="linkblock">
          <div className="linkImage" />
          See my work
        </Link>
        <a
          target="blank"
          href="https://world.hey.com/brandonlent"
          className="linkblock"
        >
          <div className="linkImage" />
          See my blog
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.notion.so/brandonlent/Resume-f41459f115fd4cd2b2190890e57b1a1b" className="linkblock">
          <div className="linkImage" />
          Resume
        </a>
        <a href="mailto:brandonlent@hey.com" className="linkblock">
          <div className="linkImage" />
          Contact me
        </a>
      </section>
    </div>
  );
};
