import React, { useState, useMemo } from 'react'
import './Truc.scss'
import createSubject from './createSubject'
import clsx from 'clsx'

const def = createSubject()
def.minili()

const Truc = () => {
  const [step, setStep] = useState(0)
  const [subject, setSubject] = useState(def)

  const { tab, z, steps = [], width: w, height: h } = subject
  const curStep = steps[step]
  const [sw, sh] = useMemo(_ => {
    return [
      curStep.reduce((mx, {x}) => x > mx ? x : mx, 0),
      curStep.reduce((my, {y}) => y > my ? y : my, 0)
    ]
  }, [step])

  return (
    <div className={'Truc'}>
      <div className='step-buttons'>
        <div
          className={clsx('stepbutton', step == 0 && 'inactive')}
          onClick={_ => setStep(step - 1)}
        >PREV</div>
        {
          step === steps.length - 1 ?
          <div className='z'>Z = {z}</div> :
          <div className='stepstep'>{step + 1}/{steps.length}</div>
        }
        <div
          className={clsx('stepbutton', step == steps.length - 1 && 'inactive')}
          onClick={_ => setStep(step + 1)}
        >NEXT</div>
      </div>
      <div className="tabs">
        <div 
          className="tab"
          style={{'--w': w + 2, '--h': h + 2}}
        >
          {
            tab.map(({x, y, value}, i) => {
              const amount = x === w || y === h
              const min = curStep.x === x && curStep.y === y
              const marked = curStep.find(({x: sx, y: sy}) => sx == x && sy == y && sx < w && sy < h)
              return <div
                key={i}
                className={clsx('cell', amount && 'amount', marked && 'marked', min && 'min')}
                style={{'--x': x + 1, '--y': y + 1}}
              >{value}</div>
            })
          }
          {
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').slice(0, w).map((val, i) => {
              return <div style={{'--x': i + 1, '--y': 0}} className="cell num">{val}</div>
            })
          }
          {
            Array.from(new Array(h).keys()).map((val, i) => {
              return <div style={{'--x': 0, '--y': i + 1}} className="cell num">{val + 1}</div>
            })
          }
        </div>
        {
          curStep &&  <div 
            className="step"
            style={{'--w': sw + 2, '--h': sh + 2}}
          >
            {
              curStep.map(({x, y, value}, i) => {
                const amount = x === w || y === h
                const computed = x > w || y > h
                return <div
                  key={i}
                  className={clsx('cell', amount && 'amount', computed && 'computed')}
                  style={{'--x': x + 1, '--y': y + 1}}
                >{value === undefined ? "-" : value}</div>
              })
            }
            {
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').slice(0, w).map((val, i) => {
                return <div style={{'--x': i + 1, '--y': 0}} className="cell num">{val}</div>
              })
            }
            {
              Array.from(new Array(h).keys()).map((val, i) => {
                return <div style={{'--x': 0, '--y': i + 1}} className="cell num">{val + 1}</div>
              })
            }
          </div>
        }
      </div>
    </div>
  )
}
export default Truc