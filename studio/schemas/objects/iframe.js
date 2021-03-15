import React from 'react'
import {MdCropSquare as IframeIcon} from 'react-icons/md'

const IframePreview = ({value}) => {
  if (!value || !value.url) {
    return <div>Missing iFrame URL</div>
  }
  const height = value.height || 600
  const url = value.url
  return (
    <>
      <iframe
        title='iFrame Preview'
        src={url}
        height={height}
        width='100%'
        frameBorder='0'
      />
    </>
  )
}
export default {
  name: 'iframe',
  type: 'object',
  title: 'Iframe',
  icon: IframeIcon,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'height',
      type: 'number',
      title: 'Iframe Height',
      description: 'Add the height in pixes you would like the iframe to show. Just use numbers without including "px".'
    }
  ],
  preview: {
    select: {
      url: 'url',
      height: 'height'
    },
    component: IframePreview
  }
}
