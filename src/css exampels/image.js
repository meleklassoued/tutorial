import React from "react"
import styled from "styled-components"
// import big from "../assets/images/big copy.jpg"
import { StaticImage } from "gatsby-plugin-image"

const images = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/big.jpg" alt="food"/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default images
