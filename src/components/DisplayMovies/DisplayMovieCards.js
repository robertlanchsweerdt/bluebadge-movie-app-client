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
  const [viewMovie, setViewMovie] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <ul className='movie-container mt-5 p-0'>
        {props.movieList.map((movie, index) => {
          return (
            <Card key={index}>
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
                    {props.watchList ? (
                      props.watchList.some(
                        (watchedMovie) => watchedMovie.Title === movie.Title
                      ) ? (
                        <Button color='secondary'>
                          Movie Exists in Watch List
                        </Button>
                      ) : (
                        <>
                          <Button
                            color='primary'
                            onClick={(e) => {
                              toggle();
                              setViewMovie(movie);
                            }}
                          >
                            View
                          </Button>
                          <Button
                            color='success'
                            onClick={(e) => props.addMovie(movie)}
                          >
                            Add
                          </Button>
                        </>
                      )
                    ) : null}
                  </div>
                ) : (
                  <div className='d-flex gap-1'>
                    <Button
                      color='primary'
                      onClick={(e) => {
                        toggle();
                        setViewMovie(movie);
                      }}
                    >
                      View
                    </Button>

                    <Button color='warning' onClick={props.removeMovie}>
                      Remove
                    </Button>
                  </div>
                )}
              </CardBody>
            </Card>
          );
        })}
      </ul>
      <DisplaySingleMovie
        toggle={toggle}
        modal={modal}
        odb={props.odb}
        viewMovie={viewMovie}
        addMovie={props.addMovie}
        removeMovie={props.removeMovie}
        disableAddBtn={props.disableAddBtn}
      />
    </>
  );
};

export default DisplayMovies;
