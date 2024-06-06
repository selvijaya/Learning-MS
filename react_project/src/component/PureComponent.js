import React, { Component } from 'react'
export class PureComponent extends Component {
  render() {
    console.log("**** Pure Component ****")
    return (
      <div>
        <h1>PureComponent {this.props.name}</h1>
      </div>
    )
  }
}
export default PureComponent
