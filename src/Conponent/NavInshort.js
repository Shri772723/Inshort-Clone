import React from 'react'
import './navinshort.css'
import HamburgerDrawer from './HamburgerDrawer'
const NavInshort = ({setCategory}) => {
  return (
    <>
    <div className="nav">

    <div className="icon">
    <HamburgerDrawer setCategory={setCategory}/>
    </div>
    <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" className='logo' />

    </div>

    </>
  )
}

export default NavInshort
