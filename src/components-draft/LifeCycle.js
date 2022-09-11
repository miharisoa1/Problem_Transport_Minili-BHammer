import React, { Component } from 'react'

export class LifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Jean",
         step: 1
      }
    }
    componentDidMount() { 
        this.setState({
            name: this.props.name,
            step: this.state.step + 1
        })
     }

     componentDidUpdate(prevProps, prevState) { 
         
     } 
     componentWillReceiveProps(nextProps) {
         
     }

  render() {
    return (
      <div>
        <h6>Chargement : {this.state.step}</h6>
        <p>Nom : {this.state.name}</p>
      </div>
    )
  }
}

export default LifeCycle