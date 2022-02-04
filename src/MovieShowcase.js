import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js' 
import movieData from './data.js' //importing the data from data.js - the array of data


//Movie Showcase has many Movie Cards
//Movie Cards have a front and a back

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    //do not use this.movie.title because this even though they are props
    return movieData.map((movie) => 
    <MovieCard title={movie.title}
    IMDBRating={movie.IMDBRating}
    genres={movie.genres}
    poster={movie.poster}
    />
    )
  }

  //return movie cards within the movie showcase
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
