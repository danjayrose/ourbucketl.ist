import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import get from 'lodash/get'

import Header from '../components/header/header'

import styles from './post/post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Header title="ourbucketl.ist">
          <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
        </Header>
        <article className={styles.post}>
          <div className="wrapper">
            <h1 className={styles.title}>{post.frontmatter.title}</h1>
            <small className={styles.date}>
              {post.frontmatter.date}
            </small>
            <div className={styles.wysiwyg} dangerouslySetInnerHTML={{ __html: post.html }} />
            <ul className={styles.pagination}>
              {previous && (
                <li className={styles.pagination__prev}>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li className={styles.pagination__next}>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </article>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp{
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
