import React from 'react'
import Link from 'gatsby-link'

import styles from "./header.module.css";

import bgImg from "../../pages/inca-jungle/machu-picchu.jpg";

class Header extends React.Component {
  render() {
    return (
      <header
        style={ { backgroundImage: `url(${bgImg})` } }
        className={styles.header + " " + (this.props.isRoot ? styles.headerBg : null)}
      >
        <div className={styles.imageWrap}>
          { this.props.children }
        </div>
        <Link className={styles.link} to="/">
          {
            this.props.isRoot
            ?
            <h1 className={styles.title}>
              {this.props.title}
            </h1>
            :
            <h3 className={styles.title}>
              {this.props.title}
            </h3>
          }
        </Link>
      </header>
    )
  }
}

export default Header
