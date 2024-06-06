import React, { Component } from 'react'

const WithCounter =(WrappedComponent,incrementNumber)=>{
   class WithCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementCount=()=>{
          this.setState(prevstate=>{
              return {count:prevstate.count+incrementNumber}
          })
      }
      
      render() {
        console.log(this.props.name)
        return (
            <WrappedComponent count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}/>
        )
      }
    }
    return WithCounter   
    
}
export default WithCounter