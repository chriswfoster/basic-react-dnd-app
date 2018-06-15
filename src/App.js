import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import Toy from "./Toy"
import Box from "./Box"

import HTML5Backend from "react-dnd-html5-backend"
import { DragDropContext } from "react-dnd"

class App extends Component {
  constructor() {
    super()
    this.state = {
      box: []
    }
  }

  handleDrop = src => {
    let placeholder = this.state.box
    placeholder.push(src)
    this.setState({ box: placeholder })
  }

  render() {
    console.log(this.state.box)
    const toyArr = ["car", "truck", "trex"]
    const toyz = toyArr.map((item, ind) => (
      <Toy src={item} id={ind} handleDrop={src => this.handleDrop(src)} />
    ))
    return (
      <div className="App">
        {toyz}

        <Box box={this.state.box} />
        {this.state.box.map(item => <p>{item}</p>)}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App)
