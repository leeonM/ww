"use client"
import React from 'react'
import { Link } from 'react-scroll'


const NavItem = (props) => {
  return (
    <div className="px-5 py-3 sm:py-7 place-content-end text-sm">
    <Link to={props.link} spy={true} smooth={true} offset={10} duration={500} className="text-white hover:text-gray-400 cursor-pointer">
        {props.option}
    </Link>
    </div>
  )
}

export default NavItem