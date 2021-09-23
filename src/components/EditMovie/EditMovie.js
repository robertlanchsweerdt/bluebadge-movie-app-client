import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Rating, RatingView } from 'react-simple-star-rating';

import './EditMovie.css';

const EditMovie = () => {
  const [foo, setFoo] = useState(
    'This is my sample content that could be edited'
  );

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Container className='mt-5'>
      <div className='edit-movie-wrapper'>
        <div className='edit-movie-img'>
          <img
            src='https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
            alt=''
            className='d-block mx-auto w-100'
          />
        </div>

        <h1 className='edit-title'>Edit Your Content</h1>

        <div className='edit-form mt-3 mt-lg-0'>
          <ul className='list-unstyled'>
            <li>Movie: Return of the Jedi</li>
            <li>Rating: PG</li>
            <li>Released Date: Sep 21, 2021</li>
            <li>Runtime: 60 minutes</li>
            <li>Genre: Action</li>
          </ul>

          <Form>
            <fieldset className='border border-secondary p-3'>
              <legend className='fs-5'>
                <u>Fields Eligible for Editing</u>
              </legend>
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
                  value={foo}
                  onChange={(e) => setFoo(e.target.value)}
                />
              </FormGroup>

              <Button color='primary'>Submit Changes</Button>
              <Button color='secondary' className='ms-3'>
                Return to Watch List
              </Button>
            </fieldset>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default EditMovie;
