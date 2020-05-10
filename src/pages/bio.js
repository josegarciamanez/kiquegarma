import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bio from "../images/bio.jpg"

export default () => (
  <Layout>
    <SEO title="bio" />
    <h3 className="portfolio__title">bio</h3>
    <div className="bio-image">
      <img style={{ width: `95vw` }} src={bio} alt="bio" />
    </div>
  </Layout>
)
