import React from "react";
import MovieItem from './MovieItem';
import { moviesData } from '../moviesData';

// UI = func(state, props)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
    };

    // this.removeMovie = this.removeMovie.bind(this);
  };

  removeMovie = (num) => {
      this.setState({
          movies: this.state.movies.filter( (i) => i.id !== num ),
      });
  };

  addMovieToWillWatch = (movie) => {
      this.setState({
          moviesWillWatch: [...this.state.moviesWillWatch, movie],
      });
  };

  removeMovieFromWillWatch = (movie) => {
      this.setState({
          moviesWillWatch: this.state.moviesWillWatch.filter(i => i.id !== movie.id),
      });
  };

  render() {
      console.log(this);
      return(
          <div className="container">
              <div className="row">
                  <div className="col-9">
                      <div className="row">
                          { this.state.movies.map((i) => {
                              return (
                                  <div className="col-6 mb-4" key={ i.id }>
                                      <MovieItem
                                          movie={ i }
                                          removeMovie={ this.removeMovie }
                                          addMovie={ this.addMovieToWillWatch }
                                          updateMovie={ this.removeMovieFromWillWatch }
                                      />
                                  </div>
                              );
                          }) }
                      </div>
                  </div>
                  <div className="col-3">
                      <p>Will watch: <span>{ this.state.moviesWillWatch.length }</span></p>
                  </div>
              </div>
          </div>
    );
  }
}

export default App;
