import React from 'react'
import PropTypes from 'prop-types'
class BareInput extends React.Component {
  constructor(props) {
    super(props)
    // this.type =100
  }
  render() {
    const type = 100
    const { type: typeInput, ...rest } = this.props
    return <input {...rest} type={typeInput} />
  }
}

// function BareInput({ type, ...rest }) {
//   return <input {...rest} />
// }
// function BareInput(props) {
//   const { type, ...rest } = props
//   return <input {...rest} />
// }
BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string
}

export default BareInput
