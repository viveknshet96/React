import React, { Component } from 'react'

const Props = (props) => {
  return (
    <div>
        <h2>Functional component</h2>
        <p>Hello,{props.name}!</p>
        <p>your age is {props.age}!</p>
    </div>
  )
}


class ClassComponent extends Component{
render(){
    return(
        <div>
        <h2>Class Component</h2>
        <p>Welcome,{this.props.name}</p>
        <p>{this.props.name}'s role is {this.props.role}</p>
        </div>
    )
}
}


export {Props, ClassComponent };  