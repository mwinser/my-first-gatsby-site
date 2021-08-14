import * as React from 'react'
import Layout from '../../components/layout'
import { graphql} from 'gatsby'


const BlogPost = ({data}) => {
 const {markdownRemark} = data  //holds .md post data
 const {frontmatter, html} = markdownRemark
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>Posted: {frontmatter.date}</p>
      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{__html:html}}
      />
        

    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      date(formatString: "MMM D, YYYY")
    }
  }
}

`




export default BlogPost