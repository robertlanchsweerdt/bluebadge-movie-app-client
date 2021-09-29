import React, { useState } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { Rating } from 'react-simple-star-rating';

import './EditMovie.css';
import APIURL from '../../helpers/environment';

const EditMovie = (props) => {
  const [rating, setRating] = useState(props.editMovie.user_rating);
  const [comments, setComments] = useState(props.editMovie.comments);
  const [watched, setWatched] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    props.setRefresh('');
  };

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  // edit movie and update database
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit');

    const reqBody = {
      user_rating: rating,
      watched,
      comments,
    };

    const url = `${APIURL}/movie/${props.editMovie.id}`;

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(reqBody),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log('It worked');
        props.setRefresh('triggered');
        toggle();
      } else {
        console.log('Save Failed');
      }
    });
  };

  console.log(props);

  return props.editMovie.movie ? (
    <Container className='mt-5'>
      <div className='edit-movie-wrapper'>
        <div className='edit-movie-img'>
          <img
            src={props.editMovie.movie.Poster}
            alt={props.editMovie.movie.Title}
            className='d-block mx-auto w-100'
          />
        </div>

        <h1 className='edit-title'>Edit Your Content</h1>

        <div className='edit-form mt-3 mt-lg-0'>
          <ul className='list-unstyled'>
            <li>Movie: {props.editMovie.movie.Title}</li>
            <li>Rating: {props.editMovie.movie.Rated}</li>
            <li>Released Date: {props.editMovie.movie.Released}</li>
            <li>Runtime: {props.editMovie.movie.Runtime} minutes</li>
            <li>Genre: {props.editMovie.movie.Genre}</li>
          </ul>
          <br />

          <div className='d-flex'>
            <p className='me-3'>Watched:</p>
            {props.editMovie.watched ? <p>Yes</p> : <p>No</p>}
          </div>

          <Form className='mt-3' onSubmit={handleSubmit}>
            <fieldset className='border border-secondary p-3'>
              <legend className='fs-5'>
                <u>Fields Eligible for Editing</u>
              </legend>

              <FormGroup className='d-flex'>
                <Label className='me-3'>Watched?:</Label>
                <Input
                  type='select'
                  name='select'
                  onChange={(e) => setWatched(e.target.value)}
                >
                  <option>Select YES or NO</option>
                  <option value='false'>No</option>
                  <option value='true'>Yes</option>
                </Input>
              </FormGroup>

              <FormGroup className='d-flex'>
                <Label className='me-3'>Star Rating:</Label>
                <Rating
                  onClick={handleRating}
                  ratingValue={rating} /* Rating Props */
                />
              </FormGroup>

              <FormGroup>
                <Label for='exampleText'>Review Comments</Label>
                <Input
                  className='mt-2 mb-5'
                  type='textarea'
                  name='text'
                  id='exampleText'
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </FormGroup>

              <Button color='primary' onClick={handleSubmit}>
                Submit Changes
              </Button>
              <Button color='secondary' className='ms-3'>
                <Link to='/watch-list'>Return to Watch List</Link>
              </Button>
            </fieldset>
          </Form>
        </div>
      </div>
      {/* MODAL */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} color='success'>
          SUCCESS
        </ModalHeader>
        <ModalBody>Your edit has been successfully saved!</ModalBody>
        <ModalFooter>
          <Button color='danger' onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  ) : null;
};

export default EditMovie;
