import React from 'react'

export default (props) => {
  // console.log({props})

  // if (!props.mark && !props.mark.file && !props.mark.file.asset && !props.mark.file.asset._ref) {
  //   return
  // }

  let linkText = props.children[0]
  let linkID = props.mark.file.asset._ref
  let linkURL = linkID.split('-')[1]
  let linkExt = linkID.split('-')[2]
  linkURL = `https://cdn.sanity.io/files/${process.env.GATSBY_SANITY_PROJECT_ID}/production/${linkURL}.${linkExt}`
  return (
    <><a href={linkURL} target='_blank' rel='noopener noreferrer'>{linkText}</a></>
  )
}
