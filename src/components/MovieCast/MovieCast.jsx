import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2VlY2I5NjY5ZDlmZDE2ZmE0N2JjNWJhOThlYmY4YSIsIm5iZiI6MTcyMDc3NjE2NS41MDMyOTQsInN1YiI6IjY2OTBlZGFmYmYwZDUzOWQ1OWQ5OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kEyFqDJKXH9062iBIml7rvwnOcyYqAcH7QRca3gv1IA'
                    }
                });
                setCast(response.data.cast);
            } catch (error) {
                console.error('Error fetching cast:', error);
            }
        };

        fetchCast();
    }, [movieId]);

    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map(actor => (
                    <li key={actor.cast_id}>
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
