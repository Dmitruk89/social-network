import styles from './Navigation.module.scss';

import { NavLink} from "react-router-dom";

const Navigation = (props) => {
    
    return (
        
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName={styles.active}>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={styles.active}>Dialogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profiles" activeClassName={styles.active}>Profiles</NavLink>
                    </li>
                </ul>
            </div>
        
    )
}

export default Navigation;