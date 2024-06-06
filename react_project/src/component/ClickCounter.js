import React, { Component } from 'react'
import UpdateComponent from './withCouter'
export class clickCounter extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>{this.props.name} click {count} times</button>
      </div>
    )
  }
}

export default UpdateComponent(clickCounter,5)
