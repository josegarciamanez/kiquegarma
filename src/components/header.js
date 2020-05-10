import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
      <AniLink
        cover
        direction="right"
        bg="whitesmoke"
        to="/"
        style={{
          paddingTop: `5px`,
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <img style={{ width: `250px` }} src={logo} alt="logo" />
      </AniLink>

      <div className="links-header">
        <AniLink cover direction="right" bg="whitesmoke" to="/fashion">
          Fashion
        </AniLink>
        <AniLink cover direction="right" bg="whitesmoke" to="/landscape">
          Landscape
        </AniLink>
        <AniLink cover direction="right" bg="whitesmoke" to="/advert">
          Advert
        </AniLink>
        <AniLink cover direction="right" bg="whitesmoke" to="/still-life">
          Still Life
        </AniLink>
        <AniLink cover direction="right" bg="whitesmoke" to="/trip">
          Trip
        </AniLink>
        <AniLink cover direction="right" bg="whitesmoke" to="/contact">
          Contact
        </AniLink>
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
