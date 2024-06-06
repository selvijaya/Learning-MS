import React, { Component } from 'react'

export class RegularComponent extends Component {
  render() {
    console.log("**** Regular ****")
    return (
      <div>
        <h1>RegularComponent {this.props.name}</h1>
      </div>
    )
  }
}

export default RegularComponent
