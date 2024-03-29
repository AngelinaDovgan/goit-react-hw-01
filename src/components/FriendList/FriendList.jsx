import React from "react";
import css from './FriendList.module.css'
import FriendListItem from "../FriendListItem/FriendListItem"
export default function FriendList({ friends }) {
    return (
        <ul className={css.flexul}>
            {friends.map((friend) => (
                <li key={friend.id} className={css.liststyle}>
                    <FriendListItem
                      id={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}/>
            </li>
            ))}
        </ul>);
}
            