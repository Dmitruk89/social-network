import styles from './Profiles.module.scss';

const Profiles = (props) => {
   
    return (
        <div className={styles.profiles}>
                {props.users.map(user => {
                    return <div key={user.id} className={styles.profileCard}>
                        <h3>{user.fullName}</h3>
                        <p>{user.status}</p>
                        <button onClick={() => props.follow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                })}
            
        </div>
    )
}

export default Profiles;