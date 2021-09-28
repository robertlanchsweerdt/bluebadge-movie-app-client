import { useState, useEffect } from 'react';
import { Button, Container } from 'reactstrap';
import WatchListCards from './WatchListCards';

const WatchList = (props) => {
  props.setOdb(false);

  const [modal, setModal] = useState(false);
  // const [removeMovie, setRemoveMovie] = useState([]);

  // delete movie from database
  const movieRemoveFromList = (movie) => {
    const url = `http://localhost:4000/movie/${movie.id}`;

    props.setRemoveMovie([movie]);
    setModal(false);

    fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.sessionToken,
      }),
    });
  };

  // // fetching all movies in watch list to display
  // useEffect(() => {
  //   const url = 'http://localhost:4000/movie/';

  //   fetch(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       Authorization: props.sessionToken,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       props.setWatchList(data);
  //     });
  // }, [props.removeMovie]); // renders when a removeMovie state changes

  return (
    <>
      <Container className='mt-5'>
        <h1>A listing of all your movies that you saved from the API</h1>

        <Button color='secondary'>Display Watched Movies</Button>

        {props.watchList.length > 0 ? (
          <WatchListCards
            odb={props.odb}
            modal={modal}
            setModal={setModal}
            movieList={props.watchList}
            removeMovieFromList={movieRemoveFromList}
            setEditMovie={props.setEditMovie}
          />
        ) : null}
      </Container>
    </>
  );
};

export default WatchList;
