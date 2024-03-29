import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem"
export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem
                      id={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}/>
            </li>
            ))}
        </ul>);
}
            