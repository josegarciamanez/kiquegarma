import React from "react"
import PropTypes from "prop-types"
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container_frame">
        <div className="frame caption">
          <div className="frame__demos">
            <a
              href="https://linkendin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="frame__demo"
            >
              Ld
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="frame__demo"
            >
              In
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
