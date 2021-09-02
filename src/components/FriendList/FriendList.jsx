import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <FriendListItem
          name={name}
          avatar={avatar}
          isOnline={isOnline}
          id={id}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
