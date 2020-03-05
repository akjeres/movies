import React from "react";

export default class MovieItem extends React.Component {
    constructor() {
      super();
    };

    render() {
        const { movie: { id, title }, handler } = this.props;
        return(
            <div>
                <p>{ title }</p>
                <button type="button" onClick={ handler.bind(this, id) }>Delete movie</button>
            </div>
        );
    };
};