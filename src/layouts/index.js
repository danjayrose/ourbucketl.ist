import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

import normalizeStyles from 'normalize.css'
import baseStyles from '../global/base.css'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import HeaderImg from './escadaria-selaron.jpg';

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const isRoot = location.pathname === rootPath;

    return (
      <main className="content">
        {
          isRoot ?
          <Header title="ourbucketl.ist" isRoot={isRoot}>
            {/* <Img sizes={HeaderImg.childImageSharp.sizes} /> */}
          </Header>
          : null
        }
        {children()}
        <Footer />
      </main>
    )
  }
}

export default Template
