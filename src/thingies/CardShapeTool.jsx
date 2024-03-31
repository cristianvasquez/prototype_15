import { BaseBoxShapeTool } from 'tldraw'

export class CardShapeTool extends BaseBoxShapeTool {
  static  id = 'card'
  static  initial = 'idle'
  shapeType = 'card'

  onDoubleClick = (_info) => {
    // you can handle events in handlers like this one;
    // check the BaseBoxShapeTool source as an example
  }
}
