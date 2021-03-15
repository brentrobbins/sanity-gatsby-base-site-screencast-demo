import React from 'react'
import clientConfig from '../../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../serializers/serializers'

const Home = ({content}) => {
  return (
    <div>
      <BasePortableText blocks={content} serializers={serializers} {...clientConfig.sanity} />
    </div>
  )
}
export default Home
