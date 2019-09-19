import React from "react"
import { injectStyle } from "../utils/injectStyle"

class Layout extends React.Component {
  render() {
    const { children, classes } = this.props

    console.log({ classes })


    return (
      <div className={classes.main}>
        <main>{children}</main>
      </div>
    )
  }
}

const style = ({ colors: { back } }) => ({
  main: {
    backgroundColor: back.primary
  },
})

export default injectStyle(style)(Layout)
