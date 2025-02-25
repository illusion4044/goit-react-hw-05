import  { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

export default function  HomePage ()  {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2VlY2I5NjY5ZDlmZDE2ZmE0N2JjNWJhOThlYmY4YSIsIm5iZiI6MTcyMDc3NjE2NS41MDMyOTQsInN1YiI6IjY2OTBlZGFmYmYwZDUzOWQ1OWQ5OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kEyFqDJKXH9062iBIml7rvwnOcyYqAcH7QRca3gv1IA'
                    }
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className={css.container}>
            <h1 className={css.title}>Popular Movies</h1>
            <MovieList movies={movies} />
        </div>
    );
}


