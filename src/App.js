import React, { useState, useEffect } from 'react';
import Header from './Header';
import MovieCard from './MovieCard';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = (searchText) => {
    const apiKey = '79c5dce5';
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchText)}&apikey=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.Search) {
          Promise.all(data.Search.map(movie => fetchMovieDetails(movie.imdbID)))
            .then(moviesWithDetails => {
              setMovies(moviesWithDetails);
            })
            .catch(error => {
              console.error('Fetching movie details error:', error);
              setMovies([]);
            });
        } else {
          setMovies([]); 
        }
      })
      .catch(error => {
        console.error('Fetching error:', error);
        setMovies([]);
      });
  };

  const fetchMovieDetails = (imdbID) => {
    const apiKey = '79c5dce5';
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(movie => {
        return movie; 
      })
      .catch(error => {
        console.error('Fetching movie details error:', error);
        throw error; 
      });
  };

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  }, [searchQuery,fetchMovies]);

  return (
    <>
      <Header value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <div className="grid-container">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
