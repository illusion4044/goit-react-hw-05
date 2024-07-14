
import { Link } from 'react-router-dom';


export default function NotFoundPage  ()  {
    return (
        <div>
            <h1>404 - Page Not Found. Please, press the button Go to Home</h1>
            <Link to="/">Go to Home</Link>
        </div>
    );
}


