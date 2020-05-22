import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Particles from "react-particles-js";

export default () => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
      <Particles
        params={{
          fps_limit: 28,
          particles: {
            number: {
              value: 25,
            },
            line_linked: {
              enable: true,
              color: "#000",
              opacity: 0.1,
              zIndex: -1000,
            },
            move: {
              speed: 2,
            },
          },
        }}
      />
      <h1>PORTFOLIO</h1>

      <div className="frame__info">
        <AniLink fade to="/bio">
          bio &#10505;
        </AniLink>
      </div>
    </div>
  </Layout>
);
