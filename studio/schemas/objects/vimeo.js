import React from 'react'

import {IoLogoVimeo as Icon} from 'react-icons/md'

import getVideoId from 'get-video-id'

const wrapperVimeo = {
  position: 'relative', paddingBottom: '56.25%'
}
const iframeVimeo = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%'
}

const VimeoPreview = ({value}) => {
  console.log({value})
  if (!value || !value.url) {
    return <div>Missing Vimeo URL</div>
  }
  const id = getVideoId(value.url).id
  const url = `https://player.vimeo.com/video/${id}`
  if (!id) {
    return <div>Missing Vimeo URL</div>
  }
  return (
    <div style={wrapperVimeo}>
      <iframe
        title='Vimeo Preview'
        style={iframeVimeo}
        src={url}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      />
    </div>
  )
}
export default {
  name: 'vimeo',
  type: 'object',
  title: 'Vimeo Embed',
  icon: Icon,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Vimeo URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'maxWidth',
      type: 'number',
      title: 'Vimeo Maximum Width',
      description: 'Optional maximum Vimeo width'
    }

  ],
  preview: {
    select: {
      url: 'url'
    },
    component: VimeoPreview
  }
}
