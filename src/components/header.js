import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f5f5f5`,
      marginBottom: `1rem`,
    }}
  >
    <div className="container-header">
      <Link
        to="/"
        style={{
          paddingTop: `5px`,
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <img style={{ width: `250px` }} src={logo} alt="logo" />
      </Link>

      <div className="links-header">
        <Link to="/fashion">Fashion</Link>
        <Link to="/landscape">Landscape</Link>
        <Link to="/social">Social</Link>
        <Link to="/still-life">Still Life</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
