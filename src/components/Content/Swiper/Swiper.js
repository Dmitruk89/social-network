import styles from './Swiper.module.scss';
import ChartTitle from '../ChartTitlte/ChartTitle';
import ProfileSmall from '../Profile/ProfileSmall';

function Swiper (props){
    return (
        <div className={styles.swiper}>
           <ChartTitle title={props.title}/>
           <div className={styles.swiperContainer}>
                <ProfileSmall />
                <ProfileSmall />
                <ProfileSmall />
           </div>
        </div>
    )
}

export default Swiper