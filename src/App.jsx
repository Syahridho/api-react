import { useEffect } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useState } from "react";

function App() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovie.map((movie, i) => {
      return (
        <div key={i}>
          <div className="movie-wrapper">
            <div className="movie-title">{movie.title}</div>
            <img
              className="movie-image"
              src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
                movie.poster_path
              }`}
              alt=""
            />
            <div className="movie-date">release : {movie.release_date}</div>
            <div className="movie-rate">{movie.vote_average}</div>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>THE MOVIE STUDIO</h1>
        <input
          type="text"
          placeholder="cari film"
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
