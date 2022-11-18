import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getImage } from "../utils/getImage";

export function DetailMovie() {
  // en el detalle rescataremos el id que entra en esta pagina con useParams
  const { movieId } = useParams();
  //   console.log(movieId);
  //   const imgUrl = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    // obtenemos el detalle pasando el path con el id
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);
  console.log(movie);
  const imgBackUrl = getImage(1280, movie.backdrop_path);
  const imgUrl = getImage(500, movie.poster_path);

  return (
    <div
      className="back-movie py-5 position-relative"
      style={{ backgroundImage: `url('${imgBackUrl}')` }}
    >
      <div className="container">
        <div className="row text-center text-lg-start">
          <div className="col-lg-4">
            <img src={imgUrl} className="img-fluid rounded-lg" alt="" />
          </div>
          <div className="col-lg-8 mt-4 mt-lg-0">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
