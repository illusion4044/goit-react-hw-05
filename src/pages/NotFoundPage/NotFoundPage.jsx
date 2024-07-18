import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage  ()  {
    return (
        <div className={css.container}>
            <h1 className={css.title}>404 - Page Not Found. Please, press the button Go to Home</h1>
            <Link to="/" className={css.link}>Go to Home</Link>
        </div>
    );
}


