import React, { useContext } from 'react'
import { RectangleProvider, RectangleContext } from './context/RectangleContext'
import DraggableRectangle from './components/DraggableRectangle'

function Line({ from, to }) {
  const styles = {
    stroke: 'black',
    strokeWidth: 2,
  }

  return <line x1={from.x + 50} y1={from.y + 50} x2={to.x + 50} y2={to.y + 50} style={styles} />
}

function App() {
  return (
    <RectangleProvider>
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <RectangleContext.Consumer>
            {({ rectangles }) => (
              <>
                {rectangles.length > 1 &&
                  rectangles.map((rect, index) => {
                    if (index < rectangles.length - 1) {
                      return <Line key={index} from={rect} to={rectangles[index + 1]} />
                    }
                    return null
                  })}
              </>
            )}
          </RectangleContext.Consumer>
        </svg>
        {[1, 2, 3].map((id) => (
          <DraggableRectangle key={id} id={id} />
        ))}
      </div>
    </RectangleProvider>
  )
}

export default App
