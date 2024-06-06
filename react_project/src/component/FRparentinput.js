import React, { Component } from 'react'
import FRInput from './FRInput'

class FRparentinput extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    onClickHandler=()=>{
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.onClickHandler}>FRInput</button>
      </div>
    )
  }
}

export default FRparentinput
