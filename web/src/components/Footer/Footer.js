import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

export default function Footer () {
  const data = useStaticQuery(graphql`
    {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `)
  return (
    <footer>
      <span>
        {' '}
        &copy; {new Date().getFullYear()} {data.site.title} All Rights Reserved.
      </span>
    </footer>
  )
}
