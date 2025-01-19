import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import clsx from "clsx";

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
