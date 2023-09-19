import React from 'react'
//* Function component
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name} - {props.age}
    </h1>
  )
}

// class Welcome extends React.Component {
//   render() {
//     console.log(this.props)
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

export default Welcome
