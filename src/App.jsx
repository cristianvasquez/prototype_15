import React from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { drawClass } from './draw.js'
import { muchABit } from './orm/drawClasses.js'
import { getRabbit } from './orm/test-data.js'
import { CardShapeTool } from './thingies/CardShapeTool.jsx'
import { CardShapeUtil } from './thingies/CardShapeUtil.jsx'
import { components, uiOverrides } from './thingies/ui-overrides.jsx'

const customShapeUtils = [CardShapeUtil]
const customTools = [CardShapeTool]

function App () {

  const handleMount = (editor) => {

    const dataset = getRabbit()

    const sizes = {
      width: 400, height: 60,
    }

    console.log('Mounting!')
    muchABit(dataset).forEach((data, i) => {
      drawClass(editor, {
        position: {
          x: 228 + (i * (sizes.width + 50)),
          y: 128, ...sizes,
        },
        ...data,
      })
    })

    editor.zoomToFit()

  }

  return (<>
    <div className="tldraw__editor">
      <Tldraw
        onMount={handleMount}
        // persistenceKey="example2"
        shapeUtils={customShapeUtils}
        tools={customTools}
        overrides={uiOverrides}
        components={components}

      />
    </div>

  </>)
}

export default App
