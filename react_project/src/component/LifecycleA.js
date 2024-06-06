import React, { Component } from 'react'
import LifecycleB  from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    // mounting method 1
      this.state = {
         name:"Muthu selvi"
      }
      console.log("LifecycleA Constryctor")
    }
    //Mounting method2
    static getDerivedStateFromProps(props,stat){
        console.log("lifecycleA getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(){
        console.log("LifecycleA Should component update")
        return true
    }
    getSnapshotBeforeUpdate(preprops,prevstate){
        console.log ('lifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA componentdidupdate')
    }
    componentDidMount(){
        console.log('lifecycleA componentDidMount')
    }
    changeState=()=>{
        this.setState({
            name:"suba"
        })
    }
  render() {
    console.log("LifecycleA render")
    return (
      <div>
        <h1>lifecycleA</h1>
        <button onClick={this.changeState}>name</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
