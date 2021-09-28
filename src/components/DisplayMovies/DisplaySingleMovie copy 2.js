import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

import './DisplaySingleMovie.css';

const ModalExample = (props) => {
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.viewMovie.Title}</ModalHeader>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <img
                src={props.viewMovie.Poster}
                alt={props.viewMovie.Title}
                className='d-block mx-auto'
              />
            </div>
            <div className='col-12 col-lg-6'>
              <p className='mt-3 mt-lg-0'>{props.viewMovie.Plot}</p>
              <ul className='list-unstyled'>
                <li>Rating: {props.viewMovie.Rated}</li>
                <li>Released Date: {props.viewMovie.Released}</li>
                <li>Runtime: {props.viewMovie.Runtime}</li>
                <li>Genre: {props.viewMovie.Genre}</li>
              </ul>
            </div>
          </div>
        </div>
        <ModalFooter>
          {props.odb ? (
            <>
              {props.disableAddBtn ? (
                <Button color='secondary'>Movie in Watch List</Button>
              ) : (
                <Button
                  color='primary'
                  onClick={(e) => props.addMovie(props.viewMovie)}
                >
                  Add to Watch List
                </Button>
              )}

              <Button color='secondary' onClick={props.toggle}>
                Close
              </Button>
            </>
          ) : (
            <>
              <Button color='primary'>
                <Link to='/edit'>Edit</Link>
              </Button>
              <Button color='warning' onClick={props.removeMovie}>
                Remove from Watch List
              </Button>
              <Button color='secondary' onClick={props.toggle}>
                Cancel
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
