import * as React from "react"
import Layout from '../../components/layout'
import { Link, graphql } from "gatsby"

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                          <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                          </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
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
        slug
      }
    }
  }
  
`


export default BlogPage