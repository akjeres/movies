import React from "react";
import { moviesData } from '../moviesData';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
    }
  };

  render() {
      console.log(this);
      return(
          <div>{ this.state.movies.map((i) => {
              return <p key={ i.id }>{ i.title }</p>;
          }) }</div>
    );
  }
}

export default App;
