import { Container } from 'reactstrap';
import DisplayMovieCards from '../DisplayMovies/DisplayMovieCards';

const WatchList = (props) => {
  props.setOdb(false);

  const movieRemoveFromList = () => {
    console.log('I have been REMOVED');
  };

  return (
    <>
      <Container className='mt-5'>
        <h1>A listing of all your movies that you saved from the API</h1>

        {props.watchList.length > 0 ? (
          <DisplayMovieCards
            odb={props.odb}
            movieList={props.watchList}
            removeMovie={movieRemoveFromList}
          />
        ) : null}
      </Container>
    </>
  );
};

export default WatchList;
