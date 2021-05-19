import styles from './Profiles.module.scss';

const Profiles = (props) => {
    
        const totalPages = Math.ceil(props.totalUsers / props.perPage);
        const pages = [];
        
        for (let i = 1; i <= totalPages; i ++){
            pages.push(i);
        }
       
        return (
            <div>
                <div className={styles.paginator}>
                    {pages.filter(i => i < 17).map(i => {
                        return <span onClick={() => props.onPageChange(i)} key={i} className={props.currentPage === i ? styles.currentPage : ''}>{i}</span>
                    })}
                </div>
                <div className={styles.profiles}>
                    {props.users.map(user => {
                            return <div key={user.id} className={styles.profileCard}>
                                <div className={styles.profileImage}>
                                    <img alt={'user'} src={!user.photos.small ? 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' : user.photos.small} />
                                </div>
                                <h3>{user.name}</h3>
                                <p>{user.status}</p>
                                <button onClick={() => props.follow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        })}
                </div>
            </div>
        )
    }

export default Profiles;