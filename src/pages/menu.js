import * as React from "react"
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"

const MenuPage = ({data}) => {

    return (
        <Layout pageTitle="Full Menu">
            {
                data.allMarkdownRemark.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            {node.frontmatter.title}
                        </h2>
                        <p>{node.frontmatter.item_description}</p>
                        <p>{node.frontmatter.item_price}</p>
                    </article>
                ))
            }
            
        </Layout>
    )
}

export const query = graphql`
query MenuList {
    allMarkdownRemark(
      sort: {fields: frontmatter___title, order: ASC}
      filter: {frontmatter: {date: {eq: null}}}
    ) {
      nodes {
        frontmatter {
          title
          item_price
          item_description
          image
          image_alt
        }
        id
      }
    }
  }
  
`


export default MenuPage