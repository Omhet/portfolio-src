export const random = (min, max) => {
  if (Array.isArray(min)) {
    return min[~~(Math.random() * min.length)]
  }

  if (!max) {
    max = min || 1
    min = 0
  }

  return min + Math.random() * (max - min)
}
