import css from './Profile.module.css'
export default function Profile({ username, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div>
                <img className={css.avatarka}
                    src={image}
                    alt="User avatar"
                />
                <p>{username}</p>
                <p className={css.fol}>@{tag}</p>
                <p className={css.fol}>{location}</p>
            </div>

            <ul className={css.flexul}>
                <li className={css.flexli}>
                    <span>Followers</span>
                    <span className={css.fol}>{stats.followers}</span>
                </li>
                <li className={css.flexli}>
                    <span>Views</span>
                    <span className={css.fol}>{stats.views}</span>
                </li>
                <li className={css.flexli}>
                    <span>Likes</span>
                    <span className={css.fol}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
};