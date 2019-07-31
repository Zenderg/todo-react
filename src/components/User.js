import React from 'react'
import PropTypes from 'prop-types'

export default class User extends React.Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <p>Пользователь: {name}!</p>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}
