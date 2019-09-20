import React from "react"
import cxs from 'cxs'

import { ThemeContext } from "../themes/themeContext"

export const injectStyle = style => Component => props =>
  <ThemeContext.Consumer>{theme => {
    const classes = {};
    const finalStyle = typeof style === 'function' ? style(theme) : style;

    for (const className in finalStyle) {
      classes[className] = cxs(finalStyle[className]);
    }

    return <Component {...props} classes={classes} />;
  }}
  </ThemeContext.Consumer>