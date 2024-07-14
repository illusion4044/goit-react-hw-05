
import { NavLink } from 'react-router-dom';

export default function Navigation () {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/movies" activeClassName="active">Movies</NavLink>
        </nav>
    );
}


