export const xsorter = ({ x: x0 }, { x: x1 }) => x0 > x1 ? 1 : -1
export const ysorter = ({ y: y0 }, { y: y1 }) => y0 > y1 ? 1 : -1

const minRow = ({ tab, steps, width }, row = 0) => {
  const lastStep = (steps.slice(-1)[0] || []).filter(({y}) => y === row)
  return tab.filter(({ y, x }) => {
    return  !lastStep.find(({x: xx}) => xx === x) && x < width && y === row
  }).sort(xsorter).reduce((min, item) => {
    return (!min || min.value > item.value) ? item : min
  })
}

const rowAmount = ({ steps, tab, width }, row) => {
  const lastStep = steps.slice(-1)[0] || tab
  return lastStep.filter(({ x, y, value }) => value && x >= width && y === row).sort(xsorter).slice(-1)[0]
}

const colAmount = ({ steps, tab, height }, col) => {
  const lastStep = steps.slice(-1)[0] || tab
  return lastStep.filter(({ x, y, value }) => value && y >= height && x === col).sort(ysorter).slice(-1)[0]
}

const createStep = ({steps, width, height, tab}, {x, y, value, col}) => {
  let step = [...steps.slice(-1)[0]]
  step.push({x, y, value})
  if(col){
    for (let i = 0; i < height; i++) {
      const found = step.find(({x: ix, y: iy}) => ix === x && iy === i)
      if(!found) step.push({x: x, y: i})
    }
  }
  else {
    for (let i = 0; i < width; i++) {
      const found = step.find(({ y: iy, x: ix}) => iy === y && ix === i)
      if(!found) step.push({x: i, y: y})
    }
  }
  const {x: maxX, value: valX} = step.filter(({y: yy}) => yy === y).sort(xsorter).slice(-1)[0]
  step.push({x: maxX + 1, y, value: valX - value})

  const {y: maxY, value: valY} = step.filter(({x: xx}) => xx === x).sort(ysorter).slice(-1)[0]
  step.push({x, y: maxY + 1, value: valY - value})
  const oldStep = steps.slice(-1)[0]
  oldStep.x = x
  oldStep.y = y
  steps.push(step)
}

const getNextRow = ({steps, height, width}) => {
  if(steps.length === 0) return 0
  const lastStep = steps.slice(-1)[0]
  for (let i = 0; i < height; i++) {
    const linelength = lastStep.filter(({x, y}) => x < width && y === i).length
    if(linelength < width) return i
  }
  return height
}


const createSteps = (subject) => {
  const {height, width, tab} = subject
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
    row = getNextRow(subject)
  }
  const lastStep = 
  subject.z = subject.steps.slice(-1)[0].reduce((z, {x, y, value}) => {
    if(x < width && y < height && value){
      z += value * tab.find(({x: tx, y: ty}) => y === ty && x === tx).value
    }
    return z
  }, 0)
}

export default createSteps





