import React from 'react'

import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
