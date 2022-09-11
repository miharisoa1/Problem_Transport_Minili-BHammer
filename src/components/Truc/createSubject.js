import createSteps from "./minili"

const _def = {
  arr: [
    24, 22, 61, 49, 83, 35, 18, 23, 39, 78, 28, 65, 42, 32, 67, 56, 92, 24,
    53, 54, 14, 71, 43, 91, 67, 40, 49,  9,  9, 11, 28,  6, 14,  5
  ],
  width: 6
}

const createSubject = (arr = _def.arr, width = _def.width) => {
  let r = 0
  const tab = arr.map((value, i) => {
    if(i && i % (width + 1) === 0) r++
    return {x: i % (width + 1), y: r, value}
  })
  console.log(tab)
  const subject = {
    tab, width, height: r
  }
  subject.minili = () => {
    subject.steps = [tab.filter(({x, y}) => x >= width || y >= r)]
    createSteps(subject)
  }
  return subject
}

export default createSubject