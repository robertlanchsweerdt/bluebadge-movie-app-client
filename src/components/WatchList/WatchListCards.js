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

import WatchListSingleMovie from './WatchListSingleMovie';

const DisplayMovies = (props) => {
  const [viewMovie, setViewMovie] = useState([]);
  // const [modal, setModal] = useState(false);

  const toggle = () => props.setModal(!props.modal);

  return (
    <>
      <ul className='movie-container mt-5 p-0'>
        {props.movieList.map((movie, index) => {
          return (
            <Card key={index}>
              <CardImg
                top
                width='100%'
                src={movie.movie.Poster}
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle
                  tag='h5'
                  className='text-dark fw-bold text-uppercase'
                >
                  {movie.movie.Title}
                </CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>
                  Release Date: {movie.movie.Released}
                </CardSubtitle>
                <CardText className='text-dark movie-story'>
                  {movie.movie.Plot}
                </CardText>

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

                  <Button
                    color='warning'
                    onClick={() => props.removeMovieFromList(movie)}
                  >
                    Remove
                  </Button>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </ul>
      <WatchListSingleMovie
        toggle={toggle}
        modal={props.modal}
        viewMovie={viewMovie}
        editMovie={props.editMovie}
        setEditMovie={props.setEditMovie}
        removeMovieFromList={props.removeMovieFromList}
      />
    </>
  );
};

export default DisplayMovies;
