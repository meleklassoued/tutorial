import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../css exampels/button"
export default function Home() {
  return (
    <>
      <Layout>
        <h1>hello people</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            dolor? Nisi, rerum reiciendis tempore quisquam eum error veniam!
            Iusto commodi esse dolorum eaque harum? Blanditiis, quam in
            voluptatum autem ea pariatur ullam. Eveniet quae vel magnam, debitis
            consequuntur laboriosam quia voluptate libero praesentium adipisci
            molestias eaque, veniam tempora omnis ipsa?
          </p>
          <ExampleButton>click Me</ExampleButton>
        </div>
      </Layout>
    </>
  )
}
