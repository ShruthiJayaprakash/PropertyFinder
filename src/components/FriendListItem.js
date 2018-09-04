import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import styles from './FriendListItem.css';

class FriendListItem extends Component {

  render() {
    return (
      <li>
        <div>
          <div><span>{this.props.name}</span></div>
          <div><span>{this.props.sex}</span></div>
          <div>
            <small>xx friends in common</small>
          </div>
        </div>
        <div>
          <button onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>
          <button onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired
};

export default FriendListItem
