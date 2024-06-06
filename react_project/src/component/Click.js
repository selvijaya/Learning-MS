import React, { Component } from 'react'

export class Click extends Component {
  render() {
    const {count,increment}=this.props
    return (
        <button onClick={increment}>Clicked {count} times</button>
    )
  }
}

export default Click
