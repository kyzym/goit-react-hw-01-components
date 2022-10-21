import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem"

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
   {friends.map(friend=>(<FriendListItem {...friend} key={friend.id}></FriendListItem>))}
</ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}