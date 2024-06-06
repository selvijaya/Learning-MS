import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topics:''
      }
    }
    handleUsername=(event)=>{
        this.setState({
        username:event.target.value
    })
    }
    handleComment=(event)=>{
        this.setState({
        comment:event.target.value
    })
    }
    handleTopics=(event)=>{
        this.setState({
        topics:event.target.value
        })
    }
    handlesubmit=(event)=>{
        alert(`${this.state.username} and ${this.state.comment} and ${this.state.topics}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handlesubmit}>
            <div>
                <label>UserName</label>
                <input 
                type='text'
                value={this.state.username}
                onChange={this.handleUsername}
                >
                </input>
            </div>
            <div>
               <label>Comments</label>
                <textarea
                value={this.state.comment}
                onChange={this.handleComment}>
                </textarea>
            </div>
            <div>
              <label>topics</label>
                    <select value={this.state.topics} onChange={this.handleTopics}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
            </div>
            <button>Submit</button>
        </form>
    )
  }
}

export default Form
