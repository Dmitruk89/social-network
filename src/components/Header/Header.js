import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';

function Header(props){
    
    return (
        <div className={styles.header}>
            <div className="header_logo">LOGO</div>
            <div className="header_search-field">SEARCH FIELD</div>
            <Navigation />
            <div className="header_auth">
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>LOG IN</NavLink>
                }
            </div>
            <div className="header_burger-menu">BURGER</div>
        </div>
    )
}

export default Header