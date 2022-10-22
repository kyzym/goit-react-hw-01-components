import {
  FriendImg,
  FriendItem,
  FriendName,
  Status,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status>{isOnline}</Status>
      <FriendImg src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
