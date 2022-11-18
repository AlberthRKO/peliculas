import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { get } from "../data/httpClient";
import "../components/contextMovie.css";

export function ContextMovie() {
  // llamamos a los datos de la api
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      // console.log(data);
    });
  }, []);
  console.log(movies);

  return movies.map((movie, key) => <MovieCard key={key} movie={movie} />);
}
