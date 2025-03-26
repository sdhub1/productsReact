import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout1 = (props) => {
  return (
    <>
    <div className=''>

{props.children}

    </div>
    </>
  )
}

export default Layout1