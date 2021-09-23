import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

import './DisplayMovies.css';
import DisplaySingleMovie from './DisplaySingleMovie';

const DisplayMovies = (props) => {
  const [movieAPI, setMovieAPI] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <ul className='movie-container mt-5 p-0'>
        {props.mockAPI.map((movie, index) => {
          return (
            <div>
              {console.log('I am the movie API -->', props.odb)}
              <Card>
                <CardImg
                  top
                  width='100%'
                  src={movie.Poster}
                  alt='Card image cap'
                />
                <CardBody>
                  <CardTitle
                    tag='h5'
                    className='text-dark fw-bold text-uppercase'
                  >
                    {movie.Title}
                  </CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    Release Date: {movie.Released}
                  </CardSubtitle>
                  <CardText className='text-dark movie-story'>
                    {movie.Plot}
                  </CardText>

                  {/* if ODB the show these buttons */}
                  {props.odb ? (
                    <div className='d-flex gap-1'>
                      <Button
                        color='primary'
                        onClick={(e) => {
                          toggle();
                          setMovieAPI(movie);
                        }}
                      >
                        View
                      </Button>

                      <Button color='success'>Add</Button>
                    </div>
                  ) : (
                    <div className='d-flex gap-1'>
                      <Button
                        color='primary'
                        onClick={(e) => {
                          toggle();
                          setMovieAPI(movie);
                        }}
                      >
                        View
                      </Button>

                      <Button color='warning'>Remove</Button>
                    </div>
                  )}
                </CardBody>
              </Card>
            </div>
          );
        })}
      </ul>
      <DisplaySingleMovie
        toggle={toggle}
        modal={modal}
        movie={movieAPI}
        odb={props.odb}
      />
    </>
  );
};

export default DisplayMovies;
