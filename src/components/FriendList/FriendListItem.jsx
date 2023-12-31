import React from 'react';
import css from './FriendList.module.css';
export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.iconStatus} ${
          friend.isOnline ? css.online : css.offline
        }`}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};
