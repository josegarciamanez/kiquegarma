import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <script src="src/js/three.js" type="text/jsx"></script>
        <script src="src/js/dat-gui.js" type="text/jsx"></script>
        <script src="src/js/gsap.js" type="text/jsx"></script>
        <script src="src/js/sketch.js" type="text/jsx"></script>
        <script src="src/js/demo.js" type="text/jsx"></script>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{ padding: `10px 0` }}>
        KIQUEGARMA © {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
