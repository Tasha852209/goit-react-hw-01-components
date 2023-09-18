import React from 'react';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ friend }) => {
  return (
    <li className="item">
      <span
        className={`${css.iconStatus} ${
          friend.isOnline ? css.online : css.offline
        }`}
      ></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};
