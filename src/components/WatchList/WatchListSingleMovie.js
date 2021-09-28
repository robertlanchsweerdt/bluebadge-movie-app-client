import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { RatingView } from 'react-simple-star-rating';

const ModalExample = (props) => {
  const editMovie = (movie) => {
    props.setEditMovie(movie);
  };

  return props.viewMovie.movie ? (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>
          {props.viewMovie.movie.Title}
        </ModalHeader>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <img
                src={props.viewMovie.movie.Poster}
                alt={props.viewMovie.movie.Title}
                className='d-block mx-auto'
              />
            </div>
            <div className='col-12 col-lg-6'>
              <p className='mt-3 mt-lg-0'>{props.viewMovie.movie.Plot}</p>
              <ul className='list-unstyled'>
                <li>Rating: {props.viewMovie.movie.Rated}</li>
                <li>Released Date: {props.viewMovie.movie.Released}</li>
                <li>Runtime: {props.viewMovie.movie.Runtime}</li>
                <li>Genre: {props.viewMovie.movie.Genre}</li>
              </ul>
              <RatingView ratingValue={props.viewMovie.user_rating} />
              <p>Comments: {props.viewMovie.comments}</p>
            </div>
          </div>
        </div>
        <ModalFooter>
          <>
            <Button color='primary' onClick={editMovie(props.viewMovie)}>
              <Link to='/edit'>Edit</Link>
            </Button>
            <Button
              color='warning'
              onClick={() => props.removeMovieFromList(props.viewMovie)}
            >
              Remove from Watch List
            </Button>
            <Button color='secondary' onClick={props.toggle}>
              Cancel
            </Button>
          </>
        </ModalFooter>
      </Modal>
    </div>
  ) : null;
};

export default ModalExample;
