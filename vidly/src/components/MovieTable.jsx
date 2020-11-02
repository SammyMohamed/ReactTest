import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Liked from "./liked";

class MovieTable extends Component {
  state = { movies: [] };

  componentDidMount() {
    // This should come from the backend
    const movies = getMovies().map(movie => ({ ...movie, liked: false }));
    this.setState({ movies });
  }

  deleteMovie = movieID => {
    let { movies } = this.state;
    movies = movies.filter(movie => movie._id !== movieID);
    this.setState({ movies });
  };

  handleLiked = movieID => {
    const movies = [...this.state.movies];

    const movie = movies.find(movie => movie._id === movieID);
    movie.liked = !movie.liked;

    // This should update through the backend as well

    this.setState({ movies });
  };

  renderMovies() {
    const { movies } = this.state;
    if (movies.length === 0) return "There are no movies!";

    const headerText = `Showing ${movies.length} movies`;
    return (
      <div>
        {headerText}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Liked
                    liked={movie.liked}
                    onLiked={this.handleLiked}
                    id={movie._id}
                  />
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteMovie(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

export default MovieTable;
