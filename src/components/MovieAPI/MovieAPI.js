import React from 'react';
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ButtonGroup,
} from 'reactstrap';
import movieImg from '../../imgs/movie.jpeg';
import './MovieAPI.css';

const MovieAPI = () => {
  const fooMovie = [
    {
      img: movieImg,
      title: 'Some Title',
    },
    {
      img: movieImg,
      title: 'Some Title',
    },
    {
      img: movieImg,
      title: 'Some Title',
    },
    {
      img: movieImg,
      title: 'Some Title',
    },
    {
      img: movieImg,
      title: 'Some Title',
    },
    {
      img: movieImg,
      title: 'Some Title',
    },
  ];

  const MovieBox = () => {
    return (
      <>
        <ul className='movie-container mt-5'>
          {fooMovie.map((movie, index) => {
            return (
              <div>
                <Card>
                  <CardImg
                    top
                    width='100%'
                    src={movie.img}
                    alt='Card image cap'
                  />
                  <CardBody>
                    <CardTitle
                      tag='h5'
                      className='text-dark fw-bold text-uppercase'
                    >
                      {movie.title}
                    </CardTitle>
                    <CardSubtitle
                      tag='h6'
                      className='mb-2 text-muted fst-italic'
                    >
                      {movie.title}
                    </CardSubtitle>
                    <CardText className='text-dark movie-story'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <div className='d-flex gap-1 justify-content-between'>
                      <Button color='primary'>View</Button>
                      <Button color='success'>Add</Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <Container className='mt-5'>
        <h1>Search the Movie API</h1>
        <MovieBox />
      </Container>
    </>
  );
};

export default MovieAPI;
