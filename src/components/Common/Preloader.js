import styles from './Preloader.module.scss';
import preloader from '../../assets/loader.gif';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img alt={'preloader'} src={preloader} />
        </div>
    )
}

export default Preloader