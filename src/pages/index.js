import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" />

    <div className="frame caption">
      <div className="frame__info">Next</div>
      <div className="frame__demos">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="frame__demo"
        >
          Fb
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="frame__demo"
        >
          Tw
        </a>
        <a
          href="https://behance.com"
          target="_blank"
          rel="noopener noreferrer"
          className="frame__demo"
        >
          Be
        </a>
      </div>
    </div>

    <div className="container">
      <h1>
        KIQUE GARMA<sub>Photo</sub>
      </h1>
    </div>
    <div id="content" className="content">
      <div
        id="slider"
        data-images='["./images/img61.jpg","./images/img62.jpg","./images/img63.jpg","./images/img64.jpg"]'
        data-disp="./images/disp1.jpg"
      ></div>
    </div>
  </Layout>
)
