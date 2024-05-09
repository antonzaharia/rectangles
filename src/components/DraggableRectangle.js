import React, { useContext, useState } from 'react'
import { RectangleContext } from '../context/RectangleContext'

const DraggableRectangle = ({ id }) => {
  const { rectangles, setRectangles } = useContext(RectangleContext)
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const rectangle = rectangles.find((rect) => rect.id === id)

  const onMouseDown = (e) => {
    setDragging(true)
    setOffset({
      x: e.clientX - rectangle.x,
      y: e.clientY - rectangle.y,
    })
  }

  const onMouseUp = () => {
    setDragging(false)
  }

  const onMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - offset.x
      const newY = e.clientY - offset.y
      setRectangles(rectangles.map((rect) => (rect.id === id ? { ...rect, x: newX, y: newY } : rect)))
    }
  }

  return (
    <div
      style={{
        width: '150px',
        height: '100px',
        backgroundColor: 'green',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.15)',
        position: 'absolute',
        left: `${rectangle.x}px`,
        top: `${rectangle.y}px`,
        zIndex: dragging ? 1000 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <input
        type="text"
        value={rectangle.value}
        onChange={(e) =>
          setRectangles(rectangles.map((rect) => (rect.id === id ? { ...rect, value: e.target.value } : rect)))
        }
        style={{
          width: '90%',
          padding: '5px',
          borderRadius: '4px',
          border: 'none',
          outline: 'none',
          textAlign: 'center',
        }}
      />
    </div>
  )
}

export default DraggableRectangle
