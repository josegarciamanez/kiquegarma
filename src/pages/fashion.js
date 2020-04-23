import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masonry from "react-masonry-css"
import ModalImage from "react-modal-image"

export default ({ data }) => {
  const breakpointColumn = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  }
  const images = data.allWordpressPost.edges.map(
    edge => edge.node.jetpack_featured_media_url
  )
  return (
    <Layout>
      <SEO title="fashion" />
      <h3 class="portfolio__title">Fashion Photos</h3>
      <Masonry
        breakpointCols={breakpointColumn}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, i) => (
          <ModalImage key={i} small={img} large={img} hideDownload="true" />
        ))}
      </Masonry>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "fashion" } } } }
    ) {
      edges {
        node {
          jetpack_featured_media_url
          categories {
            name
          }
        }
      }
    }
  }
`
