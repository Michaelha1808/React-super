import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      food: 'coconut',
      marriage: false
    }
  }
  handleChange = (event) => {
    const { target } = event
    const value = event.target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.name} name='name' onChange={this.handleChange} />
          </label>
          <input type='checkbox' name='marriage' checked={this.state.marriage} onChange={this.handleChange} />
          <textarea name='address' value={this.state.address} onChange={this.handleChange} />
          <select name='food' value={this.state.food} onChange={this.handleChange}>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default Form
