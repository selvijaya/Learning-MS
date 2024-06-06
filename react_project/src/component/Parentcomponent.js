import React, { PureComponent } from 'react'
import './PureComponent'
import './RegularComponent'
import Purecomponent from './PureComponent'
import RegularComponent from './RegularComponent'
import './MemoComp'
import MemoComp from './MemoComp'

class Parentcomponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Muthu"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Selvi"
            })
        },2000)
    }
    
  render() {
    console.log("****parent component ****")
    return (
      <div>
        <h1>Parentcomponent{this.state.name}</h1>
        <Purecomponent name ={this.state.name}/>
        <RegularComponent name={this.state.name}/>
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default Parentcomponent
