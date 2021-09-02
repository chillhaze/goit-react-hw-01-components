import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ name, avatar, isOnline, id }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          backgroundColor: `${isOnline ? 'green' : 'red'}`,
        }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
