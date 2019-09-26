import React from "react"
import { injectStyle } from "../utils/injectStyle"
import Visual from "./Visual"

const Hero = ({ classes }) => {
  return (
    <section className={classes.container}>
      <Visual />
    </section>
  )
}

const style = () => ({
  container: {},
})

export default injectStyle(style)(Hero)
