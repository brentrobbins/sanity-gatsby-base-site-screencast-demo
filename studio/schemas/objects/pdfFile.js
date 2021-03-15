import React from 'react'

import {MdPictureAsPdf as PDFIcon} from 'react-icons/md'

const PDFPreview = ({value}) => {
  console.log({value})
  if (!value.file || !value.file.asset || !value.file.asset._ref) {
    return <div>Missing PDF</div>
  }
  const ID = Math.floor(Math.random() * 100)
  const height = value.height || 960
  const alt = value.alt ? (<>{value.alt}</>) : (<>Your browser can not view this PDF Embed, however you can click the link below to download.</>)
  const downloadText = value.downloadText && value.downloadText
  let PDFpath = value.file.asset._ref
  PDFpath = PDFpath.replace('file-', '')
  PDFpath = PDFpath.replace('-pdf', '')
  // PDFpath = `https://cdn.sanity.io/files/${process.env.SANITY_STUDIO_API_PROJECT_ID}/production/${PDFpath}.pdf`
  PDFpath = ''

  return (
    <>
      <object data={PDFpath} type='application/pdf' width='100%' height={height} internalinstanceid={ID}>{alt}
      </object>
      {downloadText && (<a href={PDFpath} target='_blank' rel='noopener noreferrer'>{downloadText}</a>)}
    </>
  )
}

export default {
  name: 'pdfFile',
  type: 'object',
  title: 'PDF Embed',
  icon: PDFIcon,
  fields: [
    {
      name: 'file',
      type: 'file',
      title: 'PDF file',
      validation: Rule => Rule.required()
    },
    {
      name: 'height',
      type: 'number',
      title: 'Iframe Height',
      description: 'Add the height in pixes you would like the embeded PDF to show. Just use numbers without including "px".'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity. This will show for browsers that can not embed a PDF in a page and also for screen readers.'
    },
    {
      name: 'downloadText',
      type: 'string',
      title: 'Download text',
      description: 'If you add text here it will display as a link to download the PDF under the embeded PDF. If you do not add text a download link will not show.'
    }
  ],
  preview: {
    select: {
      file: 'file',
      alt: 'alt',
      height: 'height',
      downloadText: 'downloadText'
    },
    component: PDFPreview
  }
}
