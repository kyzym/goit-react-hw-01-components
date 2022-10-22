import PropTypes from 'prop-types';
import { Box } from 'utils/Box.styled';
// import { theme } from 'utils/Theme.styled';
import {
  AvatarImg,
  UserInfo,
  UserLocation,
  UserName,
  UserStat,
  UserStatItem,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      width={'cardNormal'}
      mx="auto"
      mt={4}
      pt={4}
      backgroundColor="light"
      borderRadius="normal"
      textAlign="center"
      overflow="hidden"
    >
      <div className="description">
        <AvatarImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserLocation>{location}</UserLocation>
      </div>

      <Box as="ul" display="flex" justifyContent="center">
        <UserStatItem>
          <UserInfo>Followers</UserInfo>
          <UserStat>{followers}</UserStat>
        </UserStatItem>
        <UserStatItem>
          <UserInfo>Views</UserInfo>
          <UserStat>{views}</UserStat>
        </UserStatItem>
        <UserStatItem>
          <UserInfo>Likes</UserInfo>
          <UserStat>{likes}</UserStat>
        </UserStatItem>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
