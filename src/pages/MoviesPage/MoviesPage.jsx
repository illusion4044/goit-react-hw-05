import  { useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';


export default function MoviesPage  ()  {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async () => {
        if (query.trim() === '') return;

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2VlY2I5NjY5ZDlmZDE2ZmE0N2JjNWJhOThlYmY4YSIsIm5iZiI6MTcyMDc3NjE2NS41MDMyOTQsInN1YiI6IjY2OTBlZGFmYmYwZDUzOWQ1OWQ5OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kEyFqDJKXH9062iBIml7rvwnOcyYqAcH7QRca3gv1IA'
                }
            });
            setMovies(response.data.results);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div>
            <h1>Search Movies</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={searchMovies}>Search</button>
            <MovieList movies={movies} />
        </div>
    );
}
