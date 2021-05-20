import styles from './Profiles.module.scss';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

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
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img alt={'user'} src={!user.photos.small ? 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' : user.photos.small} />
                                    </NavLink >
                                </div>
                                <h3>{user.name}</h3>
                                <p>{user.status}</p>
                                <button disabled={props.isFollowing.some(userId => userId === user.id)}onClick={() => {
                                    props.toggleIsFollowing(true, user.id);
                                    if (!user.followed){
                                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '1ba8bae5-447f-47e5-8830-742997f73cf8'
                                            } 
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0){
                                                props.follow(user.id);
                                                props.toggleIsFollowing(false, user.id);
                                            }
                                        });
                                    } else {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '1ba8bae5-447f-47e5-8830-742997f73cf8'
                                            } 
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0){
                                                props.follow(user.id);
                                                props.toggleIsFollowing(false, user.id);
                                            }
                                        });
                                    }
                                }}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        })}
                </div>
            </div>
        )
    }

export default Profiles;