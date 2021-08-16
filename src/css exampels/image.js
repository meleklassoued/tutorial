import React from "react"
import styled from "styled-components"
// import big from "../assets/images/big copy.jpg"
import { StaticImage } from "gatsby-plugin-image"

const images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained /default</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          height={400}
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
`

export default images
