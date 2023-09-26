import React from 'react'

class BareButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(event, value) {
    console.log(event)
    console.log(value)
  }

  //   handleClick = (value) => {
  //     console.log(value)
  //   }
  //!Curring short
  //   handleClick = (value) => () => {
  //     console.log(value)
  //   }

  //!Curring detail
  //   handleClick = (value) => {
  //     console.log('value===>', value)
  //     return () => {
  //       console.log(value)
  //     }
  //   }
  render() {
    //! get even and data
    return (
      <div>
        <button onClick={(event) => this.handleClick(event, 'add')}>Add</button>
        <button onClick={this.handleClick}>Edit</button>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    )
    // ! get even
    // return (
    //   <div>
    //     <button onClick={this.handleClick}>Add</button>
    //     <button onClick={this.handleClick}>Edit</button>
    //     <button onClick={this.handleClick}>Delete</button>
    //   </div>
    // )
    // ! using bind
    // return (
    //   <div>
    //     <button onClick={this.handleClick.bind(this, 'add')}>Add</button>
    //     <button onClick={this.handleClick.bind(this, 'edit')}>Edit</button>
    //     <button onClick={this.handleClick.bind(this, 'delete')}>Delete</button>
    //   </div>
    // )
    //! normal
    //   return (
    //     <div>
    //       <button onClick={() =>this.handleClick('add')}>Add</button>
    //       <button onClick={() =>this.handleClick('edit')}>Edit</button>
    //       <button onClick={() =>this.handleClick('delete')}>Delete</button>
    //     </div>
    //   )
    //! curring
    // return (
    //     <div>
    //       <button onClick={this.handleClick.bind(this, 'add')}>Add</button>
    //       <button onClick={this.handleClick('edit')}>Edit</button>
    //       <button onClick={this.handleClick('delete')}>Delete</button>
    //     </div>
    //   )
  }
}

export default BareButton
