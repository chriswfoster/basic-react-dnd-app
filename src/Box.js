import React, { Component } from "react"
import { DropTarget } from "react-dnd"
const Types = {
  ITEM: "toy"
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}
class Box extends Component {
  render(props) {
    const { connectDropTarget } = this.props
    console.log(this.props)
    return connectDropTarget(
      <div style={{ width: "30vw", height: "20vh", border: "dotted" }}>
        
      </div>
    )
  }
}
export default DropTarget(Types.ITEM, {}, collect)(Box)
