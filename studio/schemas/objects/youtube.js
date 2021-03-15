import React from 'react'

import {IoLogoYoutube as Icon} from 'react-icons/md'

import getVideoId from 'get-video-id'

const wrapperYoutubeImage = {
  maxWidth: '100%',
  height: 'auto'
}

const YouTubePreviewImage = ({value}) => {
  if (!value || !value.url) {
    return <div>Missing YouTube URL</div>
  }
  const {id} = getVideoId(value.url)
  const url = `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`
  if (!id) {
    return <div>Missing YouTube URL</div>
  }
  return (
    <div >
      <img style={wrapperYoutubeImage}
        src={url}
      />
    </div>
  )
}
export default {
  name: 'youtube',
  type: 'object',
  title: 'Youtube Embed',
  icon: Icon,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube URL'
    },
    {
      name: 'maxWidth',
      type: 'number',
      title: 'YouTube Maximum Width',
      description: 'Optional maximum YouTube width'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: YouTubePreviewImage
  }
}
