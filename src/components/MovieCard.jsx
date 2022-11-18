import "../components/movieCard.css";

// manipulamos el dom para mandar el link de la pelicula
import { Link } from "react-router-dom";
import { getImage } from "../utils/getImage";

export const MovieCard = ({ movie }) => {
  // const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const imgUrl = getImage(500, movie.poster_path);
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-3 p-3 mx-auto">
      <div
        className="card bg-danger mx-auto "
        style={{ backgroundImage: `url('${imgUrl}')` }}
      >
        {/* <img className="img-fluid" src={imgUrl} alt={movie.title} /> */}

        <div className="content-info">
          <Link to={"/movies/" + movie.id}>
            <h3>{movie.title}</h3>
          </Link>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

// export default MovieCard;
