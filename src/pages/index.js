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
          particles: {
            number: {
              value: 80,
            },
            line_linked: {
              color: "#000",
              opacity: 0.1,
              zIndex: -1000,
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
