import React, { useEffect } from "react"
import Sketch from "sketch-js"
import { injectStyle } from "../utils/injectStyle"
import Particle from "../utils/visual/Particle"
import { random } from "../utils/visual/helpers"

const Visual = ({ classes }) => {
  const containerRef = React.createRef()

  // useEffect(() => {
  //   startVisual(containerRef)
  // }, [containerRef])

  return (
    <div className={classes.container} ref={containerRef}>
      <h1 className={classes.logo}>
        <span>VLADIMIR IVANOV</span> <span>/</span>{" "}
        <span className={classes.title}>web dev</span>
      </h1>
    </div>
  )
}

const startVisual = containerRef => {
  const MAX_PARTICLES = 50
  const COLOURS = [
    "#69D2E7",
    "#A7DBD8",
    "#E0E4CC",
    "#F38630",
    "#FA6900",
    "#FF4E50",
    "#F9D423",
  ]
  const particles = []
  const pool = []

  const container = containerRef.current

  const sketch = Sketch.create({
    container,
    retina: "auto",
    fullscreen: false,
    width: container.offsetWidth,
    height: container.offsetHeight,
  })

  sketch.setup = function() {
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const x = sketch.width * 0.5 + random(-100, 100)
      const y = sketch.height * 0.5 + random(-100, 100)
      sketch.spawn(x, y)
    }
  }

  sketch.spawn = function(x, y) {
    if (particles.length >= MAX_PARTICLES) pool.push(particles.shift())

    const particle = pool.length ? pool.pop() : new Particle()
    particle.init(x, y, random(5, 40))
    particle.wander = random(0.5, 2.0)
    particle.color = random(COLOURS)
    particle.drag = random(0.9, 0.99)
    const theta = random(Math.PI * 2)
    const force = random(2, 8)
    particle.vx = Math.sin(theta) * force
    particle.vy = Math.cos(theta) * force
    particles.push(particle)
  }

  sketch.update = function() {
    for (let i = particles.length - 1; i >= 0; i--) {
      let particle = particles[i]

      if (particle.alive) particle.move()
      else pool.push(particles.splice(i, 1)[0])
    }
  }

  sketch.draw = function() {
    sketch.globalCompositeOperation = "lighter"

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].draw(sketch)
    }
  }
}

const style = ({ colors: { accent } }) => ({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    color: accent.primary,
  },
})

export default injectStyle(style)(Visual)
