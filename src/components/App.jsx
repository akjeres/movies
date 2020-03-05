import React from "react";
import MovieItem from './MovieItem';
import { moviesData } from '../moviesData';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
    }
  };

  removeMovie = (num) => {
      this.setState({
          movies: this.state.movies.filter( (i) => i.id !== num ),
      });
  };

  render() {
      console.log(this);
      return(
          <div>{ this.state.movies.map((i) => {
              return (
                  <MovieItem key={i.id} movie={i} handler={this.removeMovie} />
              );
          }) }</div>
    );
  }
}

export default App;
