import { createShapeId } from '@tldraw/tldraw'

const drawClass = (editor,  { position, header, rows }) => {
  console.log('drawing')

  // Create a rectangle representing the class
  editor.createShapes([
    {
      id: createShapeId(header),
      type: 'geo',
      x: position.x,
      y: position.y,
      props: {
        geo: 'rectangle',
        w: position.width,
        h: position.height,
        dash: 'draw',
        color: 'blue',
        size: 's',
        text: header,
      },
    }])

  // Create text shapes for properties
  rows.forEach((property, i) => {
    editor.createShapes([
      {
        id: createShapeId(`${header}_prop_${i}`),
        type: 'geo',
        x: position.x,
        y: position.y + position.height * (i + 1),

        props: {
          geo: 'rectangle',
          text: property,
          size: 's',
          color: 'black',
          w: position.width,
          h: position.height,
        },
      }])
  })
}

export { drawClass }
