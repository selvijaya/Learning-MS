import React, { Component } from 'react'

export class ErrorHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    
  render() {
    if(this.state.hasError){
        return <h1> SomeThing Went Wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorHandler
