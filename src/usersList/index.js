import React, { PropTypes } from 'react';
import User from '../user';
import classes from '../styles.css';

export default class UsersList extends React.Component {

  render(){

    const { listOfUsers } = this.props;
    const styles = {
      border: '10px solid green',
      padding: '20px',
      backgroundColor: 'yellow'
    };

    return (<ul className={ classes.usersList } style={ styles }>
      {
        listOfUsers.map((user, index) => <User key={ index } firstName={ user.firstName } lastName={ user.lastName } age={ user.age }/> )
      }
    </ul>);
  }
}

UsersList.propTypes = {
  listOfUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  layout: PropTypes.oneOf(['half', 'full'])
};
