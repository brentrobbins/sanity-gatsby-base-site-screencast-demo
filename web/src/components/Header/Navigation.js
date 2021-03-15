import React from 'react'
import {Link} from 'gatsby'

function Navigation ({nav}) {
  const SiteLink = ({link, i}) => {
    if (link.siteLink) {
      // External Link
      if (link.siteLink.includes('https') || link.siteLink.includes('http')) {
        return <a href={link.siteLink} target='_blank' rel='noopener noreferrer' title={link.title}>{link.title}</a>
      //  Internal Link
      } else {
        return (<Link to={link.siteLink} title={link.title}>{link.title}</Link>)
      }
    }
  }
  return (
    <>
      <ul data-depth='0'>
        {(nav && nav.links) && nav.links.map((links, i) => (
          <li key={i}>
            <SiteLink link={links} i={i} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navigation
