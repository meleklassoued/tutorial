import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../css exampels/about.module.css"
const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>about Page</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos
          earum veniam soluta explicabo illum. Deleniti qui dolores possimus
          temporibus accusantium, facere tempore ex reprehenderit sapiente? Sint
          officiis nostrum quos aliquid vel. Voluptatibus ea libero iusto?
          Quibusdam repellat, non saepe quisquam officiis repellendus, odit,
          amet rerum natus dolores mollitia placeat!
        </p>
      </div>
    </Layout>
  )
}

export default about
