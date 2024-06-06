import React, { Component} from 'react'

export class Refcomp extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
      // this.cbRef=null
      // this.setcbRef=element=>{
      //   this.cbRef=element
      // }
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    // componentDidMount(){
    //     if(this.cbRef){
    //         this.cbRef.focus()
    //     }
    // }
    // clickHandler=()=>{
    //     alert(this.inputRef.current.value)
    // }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        {/* <input type='text' ref={this.setcbRef}/> */}
        {/* <button onClick={this.clickHandler}>click</button> */}
      </div>
    )
  }
}

export default Refcomp
