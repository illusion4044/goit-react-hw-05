import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export default function Navigation () {
    return (
        <nav className={css.nav}>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/movies" activeClassName="active">Movies</NavLink>
        </nav>
    );
}


