const subject = {
  width: 6,
  height: 4,
  tab: [
    { x: 0, y: 0, value: 24 }, { x: 1, y: 0, value: 22 }, { x: 2, y: 0, value: 61 }, { x: 3, y: 0, value: 49 }, { x: 4, y: 0, value: 83 }, { x: 5, y: 0, value: 35 }, { x: 6, y: 0, value: 18 },
    { x: 0, y: 1, value: 23 }, { x: 1, y: 1, value: 39 }, { x: 2, y: 1, value: 78 }, { x: 3, y: 1, value: 28 }, { x: 4, y: 1, value: 65 }, { x: 5, y: 1, value: 42 }, { x: 6, y: 1, value: 32 },
    { x: 0, y: 2, value: 67 }, { x: 1, y: 2, value: 56 }, { x: 2, y: 2, value: 92 }, { x: 3, y: 2, value: 24 }, { x: 4, y: 2, value: 53 }, { x: 5, y: 2, value: 54 }, { x: 6, y: 2, value: 14 },
    { x: 0, y: 3, value: 71 }, { x: 1, y: 3, value: 43 }, { x: 2, y: 3, value: 91 }, { x: 3, y: 3, value: 67 }, { x: 4, y: 3, value: 40 }, { x: 5, y: 3, value: 49 }, { x: 6, y: 3, value: 9 },
    { x: 0, y: 4, value: 9 }, { x: 1, y: 4, value: 11 }, { x: 2, y: 4, value: 28 }, { x: 3, y: 4, value: 6 }, { x: 4, y: 4, value: 14 }, { x: 5, y: 4, value: 5 }, { x: 6, y: 3, value: 9 },
  ],
  steps: []
}

const xsorter = ({ x: x0 }, { x: x1 }) => x0 > x1 ? 1 : -1
const ysorter = ({ y: y0 }, { y: y1 }) => y0 > y1 ? 1 : -1

const minRow = ({ tab, steps, width }, row = 0) => {
  const lastStep = (steps.slice(-1)[0] || []).filter(({y}) => y == row)
  return tab.filter(({ y, x }) => {
    return  !lastStep.find(({x: xx}) => xx == x) && x < width && y == row
  }).sort(xsorter).reduce((min, item) => {
    return (!min || min.value > item.value) ? item : min
  })
}

const rowAmount = ({ steps, tab, width }, row) => {
  const lastStep = steps.slice(-1)[0] || tab
  return lastStep.filter(({ x, y, value }) => value && x >= width && y == row).sort(xsorter).slice(-1)[0]
}

const colAmount = ({ steps, tab, height }, col) => {
  const lastStep = steps.slice(-1)[0] || tab
  return lastStep.filter(({ x, y, value }) => value && y >= height && x == col).sort(ysorter).slice(-1)[0]
}

const createStep = ({steps, width, height, tab}, {x, y, value, col}) => {
  let step = steps.length ? [...steps.slice(-1)[0]] : tab.filter(({x, y}) => x >= width || y >= height)
  step.push({x, y, value})
  if(col){
    for (let i = 0; i < height; i++) {
      const found = step.find(({x: ix}) => ix == x && y == i)
      if(!found) step.push({x: x, y: i})
    }
  }
  else {
    for (let i = 0; i < width; i++) {
      const found = step.find(({ y: iy}) => iy == y && x == i)
      if(!found) step.push({x: i, y: y})
    }
  }
  const {x: maxX, value: valX} = step.filter(({y: yy}) => yy == y).sort(xsorter).slice(-1)[0]
  step.push({x: maxX + 1, y, value: valX - value})

  const {y: maxY, value: valY} = step.filter(({x: xx}) => xx == x).sort(ysorter).slice(-1)[0]
  step.push({x, y: maxY + 1, value: valY - value})
  steps.push(step)
}

const getNextRow = ({steps, height, width}) => {
  if(steps.length == 0) return 0
  const lastStep = steps.slice(-1)[0]
  for (let i = 0; i < height; i++) {
    const linelength = lastStep.filter(({x, y}) => x < width && y == i).length
    if(linelength < width) return i
  }
  return height
}


const createSteps = (subject) => {
  const {height} = subject
  let row = getNextRow(subject)
  while (row < height) {
    const {x, y} = minRow(subject, row)
    const colAmt = colAmount(subject, x)
    const rowAmt = rowAmount(subject, y)
    if(colAmt.value < rowAmt.value){
      createStep(subject, {x, y, value: colAmt.value, col: true})
    } else {
      createStep(subject, {x, y, value: rowAmt.value})
    }
    console.log("curRow:", row, subject.steps.slice(-1)[0])
    row = getNextRow(subject)
  }
}

createSteps(subject)





