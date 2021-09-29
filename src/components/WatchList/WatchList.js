import { useState } from 'react';
import { Container } from 'reactstrap';
import APIURL from '../../helpers/environment';
import WatchListCards from './WatchListCards';

const WatchList = (props) => {
  props.setOdb(false);

  const [modal, setModal] = useState(false);

  // delete movie from database
  const movieRemoveFromList = (movie) => {
    const url = `${APIURL}/movie/${movie.id}`;

    props.setRemoveMovie([movie]);
    setModal(false);

    fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    });
  };

  return (
    <>
      <Container className='mt-5'>
        <h1>A listing of all your movies that you saved from the API</h1>

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
