import PropTypes from 'prop-types';
import { Box } from 'utils/Box.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as="ul"
      mx="auto"
      mt={4}
      width={'cardM'}
      display="flex"
      flexDirection="column"
      boxShadow="medium"
      gridGap={16}
    >
      {friends.map(friend => (
        <FriendListItem {...friend} key={friend.id}></FriendListItem>
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
