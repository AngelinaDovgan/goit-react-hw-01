import css from './Profile.module.css'
export default function Profile({ username, tag, location, image, stats }) {
    return (
        <div>
            <div>
                <img className={css.avatarka}
                    src={image}
                    alt="User avatar"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={css.flexul}>
                <li className={css.flexli}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.flexli}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.flexli}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
};