import React from "react";
import PropTypes from "prop-types";
import "../routes/Home.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres, rating }) {
  

  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>

      <div className="movie__data">
        {/* 리액트에서 css스타일을 바로 먹이는 방법중 하나-> style={{ sth you want to write}} */}
        {/* <h3 className="movie__title" style={{ backgroundColor: "beige"}}>{title}</h3> */}
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, idx) => (
            <li key={idx} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <div className="movie__detail__container">
          <h4 className="movie__rating">Rating: {rating} / 10</h4>
          <Link
            to={{
              pathname: `/movie/${id}`,
              state: {
                year,
                title,
                summary,
                poster,
                genres,
                rating,
              },
            }}
          >
            <button className="movie__detail">More Detail...</button>
          </Link>
        </div>

          <p className="movie__summary">{summary}</p>
            <a className="movie__trailer" href="https://www.youtube.com/watch?v=Mkq8pnvsnQg" target="_black">

              <span className="movie__trailer__text" >Trailer</span>
              
            </a>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
