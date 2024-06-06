import React, { Component } from 'react'
import './LifecycleA'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    // mounting method 1
      this.state = {
         name:"Muthu selvi"
      }
      console.log("LifecycleB Constryctor")
    }
    //Mounting method2
    static getDerivedStateFromProps(){
        console.log("lifecycleB getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(){
        console.log("Lifecycleb Should component update")
        return true
    }
    getSnapshotBeforeUpdate(preprops,prevstate){
        console.log ('lifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB componentdidupdate')
    }
    componentDidMount(){
        console.log('lifecycleB componentDidMount')
    }

  render() {
    console.log("LifecycleB render")
    return (
      <div>
        <h1>lifecycleB</h1>
        
      </div>
    )
  }
}
export default LifecycleB
