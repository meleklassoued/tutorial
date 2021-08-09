import React from "react"
import Navbar from "./navbar"
import Footer from "./Footer"
import "./Layout.css"
const Layout = props => {
  console.log(props)
  return (
    <>
      <Navbar /> {props.children} <Footer />
    </>
  )
}

export default Layout
