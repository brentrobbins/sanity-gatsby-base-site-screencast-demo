import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

export default ({node}) => {
  if (!node.asset) {
    return null
  }
  const fluidProps = getFluidGatsbyImage(node.asset._ref, {maxWidth: 980}, clientConfig.sanity)

  return (
    <figure>
      <Img loading='eager' fluid={fluidProps} alt={node.alt} />
    </figure>
  )
}
