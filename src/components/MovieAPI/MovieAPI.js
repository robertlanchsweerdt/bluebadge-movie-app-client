import React, { useState } from 'react';
import { Container } from 'reactstrap';
import DisplayMovieCards from '../DisplayMovies/DisplayMovieCards';

const MovieAPI = (props) => {
  props.setOdb(true);
  const API_KEY = '23278c5e';
  const baseURL = `http://www.omdbapi.com/?apikey=${API_KEY}&plot=full`;
  const watchListURL = 'http://localhost:4000/movie';

  const [modal, setModal] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');
  const [results, setResults] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const movieAddToList = (movie) => {
    props.setAddMovie([movie]);

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
    }).then(() => {
      setModal(false);
      setRefresh(false);
    });
  };

  const fetchAPI = () => {
    const url = `${baseURL}&t=${searchTitle}`;

    console.log('Fetching -->', url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults([data]);
        console.log(typeof results, results);
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
          modal={modal}
          setModal={setModal}
          addMovie={movieAddToList}
          movieList={results}
          watchList={props.watchList}
          setRefresh={setRefresh}
        />
      </Container>
    </>
  );
};

export default MovieAPI;
