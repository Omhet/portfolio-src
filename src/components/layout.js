import React from "react"
import { injectStyle } from "../utils/injectStyle"

class Layout extends React.Component {

  render() {
    const { children, classes } = this.props
    return (
      <div className={classes.main}>
        <main>{children}</main>
      </div>
    )
  }
}

const style = ({ colors: { back, text } }) => ({
  main: {
    backgroundColor: back.primary,
    color: text.primary
  },
})

export default injectStyle(style)(Layout)
