import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './DisplaySingleMovie.css';

const ModalExample = (props) => {
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
        <ModalBody>
          My movie is {props.movie.Title}. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={props.toggle}>
            Do Something
          </Button>{' '}
          <Button color='secondary' onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
