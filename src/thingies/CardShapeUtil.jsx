import { useState } from 'react'
import {
  DefaultColorStyle,
  getDefaultColorTheme,
  HTMLContainer,
  Rectangle2d,
  resizeBox,
  ShapeUtil,
  T,
} from 'tldraw'

// Validation for our custom card shape's props, using one of tldraw's default styles
export const cardShapeProps = {
  w: T.number, h: T.number, color: DefaultColorStyle,
}

export class CardShapeUtil extends ShapeUtil {
  static type = 'card'
  static props = cardShapeProps

  isAspectRatioLocked = (_shape) => false
  canResize = (_shape) => true
  canBind = (_shape) => true

  getDefaultProps () {
    return {
      w: 300, h: 300, color: 'black',
    }
  }

  getGeometry (shape) {
    return new Rectangle2d({
      width: shape.props.w, height: shape.props.h, isFilled: true,
    })
  }

  component (shape) {
    const bounds = this.editor.getShapeGeometry(shape).bounds
    const theme = getDefaultColorTheme(
      { isDarkMode: this.editor.user.getIsDarkMode() })

    const [count, setCount] = useState(0)

    return (<HTMLContainer
      id={shape.id}
      style={{
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'all',
        backgroundColor: theme[shape.props.color].semi,
        color: theme[shape.props.color].solid,
      }}
    >
      <h1>Aer papa que pulento</h1>
      <h2>Clicks: {count}</h2>
      <button
        onClick={() => setCount((count) => count + 1)}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {bounds.w.toFixed()}x{bounds.h.toFixed()}
      </button>
    </HTMLContainer>)
  }

  indicator (shape) {
    return <rect width={shape.props.w} height={shape.props.h}/>
  }

  onResize = (shape, info) => {
    return resizeBox(shape, info)
  }
}
