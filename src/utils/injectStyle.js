import React from "react"
import cxs from 'cxs'

export const injectStyle = style => View => {
  return (props, context = {}) => {
      debugger;
    const classes = {};
    const { theme = {} } = context;

    const finalStyle = typeof style === 'function' ? style(theme) : style;

    for (const className in finalStyle) {
      classes[className] = cxs(finalStyle[className]);
    }

    console.log({ classes, finalStyle })

    return <View {...props} classes={classes} />;
  };
}