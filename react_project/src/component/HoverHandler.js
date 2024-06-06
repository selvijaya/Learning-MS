import React, { Component } from 'react'
import UpdateComponent from './withCouter'

class HoverHandler extends Component {
  render() {
    const {count,incrementCount} =this.props
    return (
      <div>
        <button onMouseOver={incrementCount}> Hover{count}times</button>
      </div>
    )
  }
}

export default UpdateComponent(HoverHandler,10)
