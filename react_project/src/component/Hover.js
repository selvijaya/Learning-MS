import React, { Component } from 'react'

export class Hover extends Component {
  render() {
    const {count,increment}=this.props
    return (
      <h1 onMouseOver={increment}>Hovered {count} times</h1>
    )
  }
}

export default Hover
