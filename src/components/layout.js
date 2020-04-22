import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div className="frame caption">
          <div className="frame__info">
            <Link to="/bio">bio</Link>
          </div>
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
