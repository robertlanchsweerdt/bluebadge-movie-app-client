import React, { useState } from 'react';
import { Container } from 'reactstrap';
import DisplayMovieCards from '../DisplayMovies/DisplayMovieCards';

const MovieAPI = (props) => {
  props.setOdb(true);
  const API_KEY = '23278c5e';
  const baseURL = `http://www.omdbapi.com/?apikey=${API_KEY}&plot=full`;
  const watchListURL = 'http://localhost:4000/movie';

  const [searchTitle, setSearchTitle] = useState('');
  const [results, setResults] = useState([]);

  // const [results, setResults] = useState([
  //   {
  //     id: 0,
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  //     Title: 'Star Wars',
  //     Rated: 'PG',
  //     Released: '25 May 1977',
  //     Runtime: '131 min',
  //     Genre: 'Action, Adventure, Fantasy',
  //     Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
  //   },
  //   {
  //     id: 1,
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  //     Title: 'Star Wars: Episode V - The Empire Strikes Back',
  //     Rated: 'PG',
  //     Released: '20 Jun 1980',
  //     Runtime: '131 min',
  //     Genre: 'Action, Adventure, Fantasy',
  //     Plot: 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett',
  //   },
  //   {
  //     id: 2,
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  //     Title: 'Star Wars: Episode VI - Return of the Jedi',
  //     Rated: 'PG',
  //     Released: '25 May 1983',
  //     Runtime: '131 min',
  //     Genre: 'Action, Adventure, Fantasy',
  //     Plot: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's tr",
  //   },
  // ]);

  const movieAddToList = (movie) => {
    const reqBody = {
      movie,
    };

    fetch(watchListURL, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.sessionToken,
      }),
    });
    // props.setWatchList([...props.watchList, movie]);
  };

  const fetchAPI = () => {
    const url = `${baseURL}&t=${searchTitle}`;

    console.log('Fetching -->', url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(results);
      });
  };

  return (
    <>
      <Container className='mt-5'>
        <h1>Search the OMDb Movie Database</h1>

        <input
          type='text'
          name='search-omdb'
          required
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <button onClick={fetchAPI}>SUBMIT</button>

        <DisplayMovieCards
          odb={props.odb}
          addMovie={movieAddToList}
          movieList={results}
          // setWatchList={props.setWatchList}
          watchList={props.watchList}
        />
      </Container>
    </>
  );
};

export default MovieAPI;
