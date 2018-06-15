import React, { Component } from "react"
import { DragSource } from "react-dnd"
const Types = {
  ITEM: "toy"
}
const itemSource = {
  beginDrag(props) {
    console.log("beginDrag")
    const item = { src: props.src, id: props.id }
    return item
  },
  endDrag(props) {
    console.log(props)
    
    return props.handleDrop(props.src)
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
class Toy extends Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props
    return connectDragSource(<p> {this.props.src} </p>)
  }
}
export default DragSource(Types.ITEM, itemSource, collect)(Toy)
