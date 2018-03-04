import React from 'react'
import Link from 'gatsby-link'

import normalizeStyles from 'normalize.css'
import baseStyles from '../global/base.css'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <main className="content">
        <Header title="ourbucketl.ist" isRoot={ location.pathname === rootPath } />
        {children()}
        <Footer />
      </main>
    )
  }
}

export default Template
