import axios from "axios";

//memanggil list ting
export const getMovieList = async () => {
  const movie = await axios.get(
    `${import.meta.env.VITE_REACT_APP_BASEURL}/movie/popular?page=1&api_key=${
      import.meta.env.VITE_REACT_APP_APIKEY
    }`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${
      import.meta.env.VITE_REACT_APP_BASEURL
    }/search/movie?query=${q}&page=1&api_key=${
      import.meta.env.VITE_REACT_APP_APIKEY
    }`
  );
  return search.data;
};
