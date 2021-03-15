import React from 'react'
import {Link} from 'gatsby'

import Figure from './Figure'
import PDFfile from './PDFfile'
import Youtube from './Youtube'
import Iframe from './Iframe'
import FileDownload from './FileDownload'

const serializers = {

  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage (props) {
      return props.node && props.node.mainImage ? <Figure {...props.node} /> : ''
    },
    youtube (props) {
      return <Youtube {...props.node} />
    },
    pdfFile (props) {
      return props.node && props.node.file && props.node.file.asset && props.node.file.asset._ref ? <PDFfile {...props.node} /> : ''
    },
    iframe (props) {
      return props.node && props.node.url ? <Iframe {...props.node} /> : ''
    }
  },

  marks: {
    fileDownload (props) {
      // console.log({props})
      switch (props.mark._type) {
        case 'fileDownload':
          if (props.mark.file && props.mark.file.asset && props.mark.file.asset._ref) { return <FileDownload {...props} /> } else { return null }
      }
    },
    link: ({mark, children}) => {
      const {blank, href} = mark
      if (!href) {
        return null
      }
      return blank === true
        ? <>
          {href.includes('https') || href.includes('http') ? (
            <a href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
          ) : (
            <a href={href}>{children}</a>
          )}
        </>
        : <>
          {href.includes('https') || href.includes('http') || href.includes('tel') || href.includes('mailto') ? (
            <a href={href}>{children}</a>
          ) : (
            <Link to={href}>{children}</Link>
          )}
        </>
    }

  },
  list: props => {
    // console.log({props})
    switch (props.type) {
      case 'number': {
        return <ol>{props.children}</ol>
      }
      case 'bullet': {
        return <ul>{props.children}</ul>
      }
      default: {
        return <ul>{props.children}</ul>
      }
    }
  }
}

export default serializers
