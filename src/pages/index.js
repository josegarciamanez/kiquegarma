import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Particles from "react-particles-js"

export default () => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
      <Particles
        params={{
          fps_limit: 28,
          particles: {
            number: {
              value: 60,
            },
            line_linked: {
              enable: true,
              color: "#000",
              opacity: 0.3,
              zIndex: -1000,
            },
            move: {
              speed: 2,
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  size: 6,
                  distance: 40,
                },
              },
            },
          },
        }}
      />
      <h1>PORTFOLIO</h1>

      <div className="frame__info">
        <Link to="/bio">bio &#10505;</Link>
      </div>
    </div>
  </Layout>
)
