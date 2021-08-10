import React from "react"
import Navbar from "./navbar"
import Footer from "./Footer"

import "../assets/css/main.css"
import "normalize.css"
const Layout = props => {
  console.log(props)
  return (
    <>
      <Navbar /> {props.children} <Footer />
    </>
  )
}

export default Layout
