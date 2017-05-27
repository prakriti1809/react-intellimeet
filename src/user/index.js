import React, { PropTypes } from 'react';

class User extends React.Component {

  render() {

    const { firstName, lastName, age } = this.props;

    return (
      <div>
        <ul>
          <li>FirstName: { firstName }</li>
          <li>LastName: { lastName }</li>
          <li>Age: { age }</li>
        </ul>
      </div>
    )
  }

}

User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    age: PropTypes.number
};

User.defaultProps = {
    firstName: 'Amit',
    lastName: 'Dubey',
    age: 25
};

export default User;
