import React from 'react'

export default (props) => {
  // console.log({props})
  const ID = props._key
  const height = props.height || 960
  const alt = props.alt ? (<>{props.alt}</>) : (<>Your browser can not view this PDF Embed, however you can click the link below to download.</>)
  const downloadText = props.downloadText && props.downloadText
  let PDFpath = props.file.asset._ref
  PDFpath = PDFpath.replace('file-', '')
  PDFpath = PDFpath.replace('-pdf', '')
  PDFpath = `https://cdn.sanity.io/files/${process.env.GATSBY_SANITY_PROJECT_ID}/production/${PDFpath}.pdf`
  return (
    <>
      <object data={PDFpath} type='application/pdf' width='100%' height={height} internalinstanceid={ID}>{alt}
      </object>
      {downloadText && (<a href={PDFpath} target='_blank' rel='noopener noreferrer'>{downloadText}</a>)}
    </>
  )
}
