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
  // para acceder al genero
  const [genero, setGenero] = useState([]);
  useEffect(() => {
    // obtenemos el detalle pasando el path con el id
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenero(data.genres);
      // console.log(data.genres);
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
        <div className="row align-items-center justify-content-center text-center text-lg-start">
          <div className="col-10 col-lg-4">
            <img src={imgUrl} className="img-fluid imagenPeli" alt="" />
          </div>
          <div className="col-lg-7 mt-4 mt-lg-0">
            <div className="content-detail ">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ratione quibusdam saepe rerum non expedita vitae vero.
                Distinctio doloremque nesciunt enim neque blanditiis?
              </p>
              <h5>{genero.length > 1 ? "Generos:" : "Genero:"}</h5>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start text-center">
                {genero.map((item, key) => (
                  <div key={item.id}>
                    <span className="badge bg-info ms-1 p-2">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
