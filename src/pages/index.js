import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import styles from "./collation/collation.module.css";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className={styles.collation}>
        <ul className={styles.list + " wrapper"}>
          <Helmet title={siteTitle} />
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <li className={styles.item} key={node.fields.slug}>
                <Link className={styles.link} to={node.fields.slug}>
                  <h3 className={styles.title}>
                    {title}
                  </h3>
                  <small className={styles.date}>{node.frontmatter.date}</small>
                  <p className={styles.preview} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
