import React from "react"
import Layout from "../components/Layout"
const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>how to get In touch</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              consequatur sit vitae repellat beatae soluta minus eligendi veniam
              ut velit nemo nostrum reprehenderit quam, sunt unde autem, fugit
              voluptates laudantium obcaecati esse in facere ex! Optio voluptas
              veritatis officia natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              ad?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              nostrum quod quos autem expedita doloribus laboriosam odit. Nulla
              odio doloremque inventore dolores animi cumque saepe, maxime,
              alias repellendus numquam earum?
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your Name</label>
                <input type="text" name="name" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="name">your Email</label>
                <input type="text" name="name" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your Email</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit" id="message">submit</button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
