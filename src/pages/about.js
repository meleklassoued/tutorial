import React from "react"
import Layout from "../components/Layout"
// import { page, text } from "../css exampels/about.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <article>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              asperiores expedita temporibus saepe ipsum, iure debitis,
              voluptates necessitatibus repellendus corrupti et recusandae quasi
              odio, nam harum cumque amet ratione. Obcaecati aspernatur,
              mollitia .
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, laboriosam aspernatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              labore quaerat minus magnam animi eius optio veritatis facere
              sapiente sed!
            </p>
          <Link to="/contact" className="btn">
            contact
          </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
