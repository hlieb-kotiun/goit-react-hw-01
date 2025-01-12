import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p
        className={clsx(
          css.title,
          css.status,
          isOnline ? css.statusOnline : css.statusOffline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  console.log(friends);

  return (
    <ul className={css.container}>
      {friends.map((item) => {
        return (
          <li key={item.name}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
