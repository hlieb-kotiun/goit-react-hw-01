import styles from "./Profile.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.userImg} src={image} alt="User avatar" />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>

      <ul className={styles.cardList}>
        <li className={styles.cardItem}>
          <span className={styles.cardItemText}>Followers</span>
          <span className={clsx(styles.cardItemText, styles.cardItemStats)}>
            {stats.followers}
          </span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.cardItemText}>Views</span>
          <span className={clsx(styles.cardItemText, styles.cardItemStats)}>
            {stats.views}
          </span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.cardItemText}>Likes</span>
          <span className={clsx(styles.cardItemText, styles.cardItemStats)}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
