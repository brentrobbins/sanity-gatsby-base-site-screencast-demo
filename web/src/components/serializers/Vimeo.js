import React from 'react'
import getVideoId from 'get-video-id'

function Vimeo (props) {
  if (!props || !props.url) {
    return <div>Missing Vimeo URL</div>
  }
  const id = getVideoId(props.url).id
  const url = `https://player.vimeo.com/video/${id}`
  if (!id) {
    return <div>Missing Viemo URL</div>
  }
  return (
    <div style={{
      maxWidth: `${props.maxWidth ? props.maxWidth + 'px' : 'auto'}`, margin: '0 auto'}} >
      <div style={{position: 'relative', paddingBottom: '56.25%'}}>
        <iframe
          title='Vimeo Preview'
          style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%'}}
          src={url}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        />
      </div>
    </div>
  )
}
export default Vimeo
