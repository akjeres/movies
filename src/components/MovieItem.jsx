import React from "react";

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
            removeMovie: remove,
            addMovie: add,
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
                  <button type="button" className="btn btn-secondary" onClick={ add.bind(null, this.props.movie) }>
                    Will Watch
                  </button>
                </div>
                <button type="button" onClick={ remove.bind(null, id) }>Delete movie</button>
              </div>
            </div>
            // <div>
            //     <p>{ title }</p>
            //     <button type="button" onClick={ handler.bind(null, id) }>Delete movie</button>
            // </div>
        );
    };
};