import React from 'react'
import Link from 'gatsby-link'

import styles from "./footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <small className={styles.small + " wrapper"}>
            <div>Copyright &copy; 2018.</div>
            <div>If you would like to use our images please <a href="mailto:dissosours@gmail.com">contact us</a>.</div>
            <div>Content not to be used without our permission.</div>
        </small>
      </footer>
    )
  }
}

export default Footer
