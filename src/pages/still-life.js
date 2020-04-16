import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const images = data.allWordpressPost.edges.map(
    edge => edge.node.jetpack_featured_media_url
  )
  return (
    <Layout>
      <SEO title="still-life" />
      <h3>Still Life Photos</h3>
      {images.map((img, i) => (
        <img src={img} key={i} alt={img} style={{ maxWidth: `200px` }} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "still life" } } } }
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
