import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class PostUser extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    const { user } = this.props

    if (!user) {
      return null
    }

    return (
      <cite>by {user.name}</cite>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId )
  }
}

export default connect(mapStateToProps, {
  fetchUser
})(PostUser)