import React from "react";
import ButtonMovieWillWatch from './ButtonMovieWillWatch';

export default class MovieItem extends React.Component {
    render() {
        const {
            movie: {
                id,
                title,
                backdrop_path,
                poster_path,
                vote_average,
            },
            removeMovie: deleteMovie,
            addMovie: add,
            updateMovie,
        } = this.props;
        return(
            <div className="card">
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
                alt={title}
              />
              <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Rating: {vote_average}</p>
                  <ButtonMovieWillWatch
                      add={ add.bind(null, this.props.movie) }
                      remove={ updateMovie.bind(null, this.props.movie) }
                  />
                </div>
                <button type="button" onClick={ deleteMovie.bind(null, id) }>Delete movie</button>
              </div>
            </div>
        );
    };
};