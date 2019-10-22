import React from "react"
import { injectStyle } from "../utils/injectStyle"

class Layout extends React.Component {
  render() {
    const { children, classes } = this.props
    return (
      <div className={classes.container}>
        <main className={classes.content}>{children}</main>
      </div>
    )
  }
}

const style = ({ colors: { back, text } }) => ({
  container: {
    backgroundColor: back.primary,
    color: text.primary,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1200px",
    margin: "0 auto",
    // fontFamily: 'Rubic',
    "& > *": {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
})

export default injectStyle(style)(Layout)
