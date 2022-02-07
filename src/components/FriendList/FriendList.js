import FriendListItem from './FriendListItem';
import './FriendList.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className="Friend-list">
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
