import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = useRef(location.state?.from);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2VlY2I5NjY5ZDlmZDE2ZmE0N2JjNWJhOThlYmY4YSIsIm5iZiI6MTcyMDc3NjE2NS41MDMyOTQsInN1YiI6IjY2OTBlZGFmYmYwZDUzOWQ1OWQ5OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kEyFqDJKXH9062iBIml7rvwnOcyYqAcH7QRca3gv1IA'
                    }
                });
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    const goBack = () => {
        if (previousLocation.current) {
            navigate(previousLocation.current);
        } else {
            navigate('/movies');
        }
    };

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <nav>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    );
}
