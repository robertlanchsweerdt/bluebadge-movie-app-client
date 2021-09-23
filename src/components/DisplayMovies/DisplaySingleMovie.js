import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

import './DisplaySingleMovie.css';

const ModalExample = (props) => {
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.movie.Title}</ModalHeader>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <img
                src={props.movie.Poster}
                alt={props.movie.Title}
                className='d-block mx-auto'
              />
            </div>
            <div className='col-12 col-lg-6'>
              <p className='mt-3 mt-lg-0'>{props.movie.Plot}</p>
              <ul className='list-unstyled'>
                <li>Rating: {props.movie.Rated}</li>
                <li>Released Date: {props.movie.Released}</li>
                <li>Runtime: {props.movie.Runtime}</li>
                <li>Genre: {props.movie.Genre}</li>
              </ul>
            </div>
          </div>
          {props.odb ? null : (
            <div className='col-12'>
              <p>Comments</p>
            </div>
          )}
        </div>
        <ModalFooter>
          {props.odb ? (
            <>
              {console.log('I am the modal -->', props.odb)}
              <Button color='primary' onClick={props.toggle}>
                Add to Watch List
              </Button>
              <Button color='secondary' onClick={props.toggle}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button color='primary'>
                <Link to='/edit'>Edit</Link>
              </Button>
              <Button color='warning' onClick={props.toggle}>
                Remove from Watch List
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
