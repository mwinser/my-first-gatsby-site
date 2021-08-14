import * as React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
            
        </Layout>
    )
}

export const query = graphql`
query PostList {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        wordCount {
          paragraphs
          sentences
          words
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
  
`


export default BlogPage