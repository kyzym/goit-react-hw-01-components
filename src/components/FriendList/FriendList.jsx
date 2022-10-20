import {FriendListItem} from "./FriendListItem"

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
   {friends.map(friend=>(<FriendListItem {...friend} key={friend.id}></FriendListItem>))}
</ul>
}