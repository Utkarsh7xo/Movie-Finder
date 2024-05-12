import React from 'react';

const MovieCard = ({ ...movie }) => {
  return (
    <div style={styles.cardContainer}>
      <img src={movie.Poster} alt={movie.Title} style={styles.posterStyle} />
      <div style={styles.infoContainer}>
        <h2 style={styles.titleStyle}>{movie.Title}</h2>
        <p style={styles.detail}><strong>Type:</strong> {movie.Type}</p>
        <p style={styles.detail}><strong>Year:</strong> {movie.Year}</p>
        <p style={styles.detail}><strong>Runtime:</strong> {movie.Runtime}</p>
        <p style={styles.detail}><strong>Genre:</strong> {movie.Genre}</p>
        <p style={styles.detail}><strong>Director:</strong> {movie.Director}</p>
        <p style={styles.detail}><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '25px',
    overflow: 'hidden',
    fontFamily: 'Noto Sans, sans-serif',
  },
  posterStyle: {
    width: '100%',
    height: 'auto',
  },
  infoContainer: {
    padding: '20px',
    flex: '1',
    backgroundColor: 'rgba(255, 255,255, 0.9)',
  },
  titleStyle: {
    margin: '0',
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Noto Sans, sans-serif',
  },
  detail: {
    margin: '0',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#555',
    fontFamily: 'Noto Sans, sans-serif',
  },
};

export default MovieCard;
