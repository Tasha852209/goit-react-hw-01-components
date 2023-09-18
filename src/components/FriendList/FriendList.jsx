import React from 'react';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendList/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
