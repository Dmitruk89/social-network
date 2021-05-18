import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';

function Header(){
    return (
        <div className={styles.header}>
            <div className="header_logo">LOGO</div>
            <div className="header_search-field">SEARCH FIELD</div>
            <Navigation />
            <div className="header_burger-menu">BURGER MENU</div>
        </div>
    )
}

export default Header