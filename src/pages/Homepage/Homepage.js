import styles from './Homepage.module.scss';
import Profile from '../../components/Content/Profile/Profile';
import Suggestions from '../../components/Content/Suggestions/Suggestions';
import PostCreator from '../../components/Content/PostCreator/PostCreator';
import TopChart from '../../components/Content/TopChart/TopChart';
import Swiper from '../../components/Content/Swiper/Swiper';

function Homepage (){
    return (
        <div className={styles.content}>
            <div className={styles.sidebar_left}>
                <Profile />
                <Suggestions title="Suggestions" />
            </div>
            <div className={styles.main_content}>
                <PostCreator />
                <Swiper title="Top Profiles"/>
            </div>
            <div className={styles.sidebar_right}>
                <TopChart title="Top Jobs" />
                <TopChart title="Most Viewed This Week" />
                <Suggestions title="Most Viewed People" />
            </div>
        </div>
    )
}

export default Homepage