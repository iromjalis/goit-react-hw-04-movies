import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Service/Api';
import { FilmList_Item } from './FilmList.module.css';
class FilmListItem extends Component {
  imageUrl = `https://image.tmdb.org/t/p/w500`;
  // ({ id, key, title })
  id = this.props.id;
  state = {
    film: {},
  };
  componentDidMount() {
    api.fetchMoviesById(this.props.id).then(r => this.setState({ film: r }));
  }

  render() {
    const { title, tagline, overview, homepage, poster_path } = this.state.film;
    return (
      <>
        <Link
          className={FilmList_Item}
          key={this.props.id}
          to={{
            pathname: `/movies/${this.props.id}`,
            state: {
              //   search: this.props.query !== undefined ? this.props.query : '',
              //id: this.props.film.id,
              //   from: this.props.history.location.pathname,
            },
          }}
        >
          {this.state.film && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="poster"
                width="450"
              />
              <h3>{title}</h3>
              <p>{overview} </p>
            </>
          )}
        </Link>
      </>
    );
  }
}
export default FilmListItem;
