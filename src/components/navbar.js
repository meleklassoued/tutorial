import React from "react"
import { Link } from "gatsby"

const Navbar = props => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> {props.name}</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
