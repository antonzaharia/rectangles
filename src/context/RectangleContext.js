import React, { createContext, useState } from 'react'

export const RectangleContext = createContext()

export const RectangleProvider = ({ children }) => {
  const [rectangles, setRectangles] = useState([
    { id: 1, x: 50, y: 50, value: '' },
    { id: 2, x: 150, y: 150, value: '' },
    { id: 3, x: 250, y: 250, value: '' },
  ])

  return <RectangleContext.Provider value={{ rectangles, setRectangles }}>{children}</RectangleContext.Provider>
}
