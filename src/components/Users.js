import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
debugger
    return (
      <div>
          {this.props.userCount}
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
     userCount: state.users.length };
};

// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users);

