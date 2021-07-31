import {React, useState, useEffect} from 'react';
import Movie from '../components/Movie'
import './Home.css';
import { getMovies } from "../API/Api";

function Home () {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // console.log(getMovies)
    getMovies()
    .then(movies => {
      setMovies(movies)
      setIsLoading(false);
    })
  }, [isLoading])


  return (
    <section className="container">
      
        {isLoading
          ? <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          : <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
            }
      
    </section>
  );
}

export default Home;