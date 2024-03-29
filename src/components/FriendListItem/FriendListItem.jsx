import css from './FriendListItem.module.css'
import clsx from 'clsx';
export default function FriendListItem({ avatar, name, isOnline }) {
  const amountClassNames = clsx(css.text, isOnline ? css.isOnline : css.isOffline);
return (
    <div>
  <img src={avatar} alt="Avatar" width="48" />
        <p className={css.names}>{name}</p>
        <p className={amountClassNames}>{isOnline ? "Online" : "Offline"}</p>
</div>
)}