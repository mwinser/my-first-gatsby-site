import * as React from "react"
import Layout from '../../components/layout'
import { Link, graphql } from "gatsby"

const BlogPage = ({data}) => {

    return (
        <Layout pageTitle="My Blog Posts">
            
            {
                data.allMarkdownRemark.nodes.map(node => (
                    
                    <article key={node.id}>
                        <h2>
                          <Link to={`/blog/${node.frontmatter.title.split(" ").join("-").toLowerCase()}`}>
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
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {date: {ne: null}}}
    ) {
    nodes {
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
      }
      id
    }
  }
}

`


export default BlogPage