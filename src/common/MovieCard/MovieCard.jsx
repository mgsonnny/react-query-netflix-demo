import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery(); //data:genreData data를 genreData로 이름 재정의
  console.log("장르데이터", genreData);
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

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
        {showGenre(movie.genre_ids).map((genre, index) => (
          <Badge bg="danger" key={index}>
            {genre}
          </Badge>
        ))}
        <div>
          <div>
            <Badge bg="warning" text="dark">
              평점
            </Badge>
            {" " + Math.floor(movie.vote_average * 10) / 10}
          </div>
          <div>
            <Badge bg="warning" text="dark">
              인기
            </Badge>
            {" " + Math.floor(movie.popularity)}
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
