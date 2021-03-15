import {Link, graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import Navigation from './Navigation'

import Logo from '../../assets/svgs/logo.svg'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      mainNav: sanityNavigation(_id: { eq: "mainNav" }) {
        links {
          _key
          title
          siteLink
        }
      }
    }
  `)

  return (
    <div>
      <Link to='/' aria-label='Logo'>
        <span style={{width: '250px', display: 'block'}}>
          <Logo />
        </span>
      </Link>

      <nav role='navigation' aria-label='Main menu'>
        <Navigation nav={data.mainNav} />
      </nav>
    </div>
  )
}

export default Header
