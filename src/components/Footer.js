import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy;{new Date().getfullYear} <span>simplyRecipes</span>. built with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
