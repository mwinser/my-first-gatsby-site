import * as React from 'react'
import Layout from '../../components/layout'
import { graphql} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


const BlogPost = ({data}) => {
 const {markdownRemark} = data  //holds .md post data
 const {frontmatter, html} = markdownRemark
 console.log("relative= " + frontmatter.image)
 const correctNode = data.allFile.nodes.filter(node=> node.name + node.ext == "alex-loup-hmtb568ur0g-unsplash.jpg"
 )
  console.log(correctNode)
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>Posted: {frontmatter.date}</p>
      <GatsbyImage image={correctNode[0].childImageSharp.gatsbyImageData} />
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
      image
    }
  }
  allFile {
    nodes {
      name
      ext
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}

`




export default BlogPost