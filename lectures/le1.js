// practice 1.3
const max = (a, b) => a > b ? a : b
const min = (a, b) => a > b ? b : a
const maxTwoOfThree = (a, b, c) => {
  const p = max(a, b)
  const q = min(a, b)
  if(q > c) return p + q
  else return a + b
}

