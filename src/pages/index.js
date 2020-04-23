import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
      <h1>
        KIQUE GARMA<sub>Photo</sub>
      </h1>
      <div className="frame__info">
        <Link to="/bio">bio &#10505;</Link>
      </div>
    </div>
  </Layout>
)
