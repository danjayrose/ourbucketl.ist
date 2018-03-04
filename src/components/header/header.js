import React from 'react'
import Link from 'gatsby-link'

import styles from "./header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
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
