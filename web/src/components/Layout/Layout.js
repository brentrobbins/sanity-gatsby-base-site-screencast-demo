import React from 'react'
import {Location} from '@reach/router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children, siteTitle}) => (
  <>
    <Location children={children}>
      {({location}) => {
        return (
          <div>
            <Header location={location.pathname} siteTitle={siteTitle} />
            <div id='main'>{[children]}</div>
          </div>
        )
      }}
    </Location>
    <Footer />
  </>
)

export default Layout
