import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h2>{movie.title}</h2>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">{id}</Badge>
        ))}
        <div>
          <div>
            <Badge bg="warning" text="dark">
              평점
            </Badge>
            {movie.vote_average}
          </div>
          <div>
            <Badge bg="warning" text="dark">
              인기
            </Badge>
            {movie.popularity}
          </div>
          <div>
            {movie.adult ? (
              <img
                className="image-over18"
                src="/image/over18Image.PNG"
                alt="over18"
              />
            ) : (
              <img
                className="image-18"
                src="/image/under18Image.PNG"
                alt="under18"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;

// {movie.adult ? "over18" : "under18"}
