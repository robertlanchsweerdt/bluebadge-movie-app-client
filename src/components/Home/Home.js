import React from 'react';
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import movieImg from '../../imgs/movie.jpeg';
import './Home.css';

const Home = () => {
  return (
    <>
      <Container className='mt-5' id='home-page'>
        <div className='copy-overlay'>
          <h1>Welcome to My Movie App!</h1>
          <h3 className='lead mt-5 text-italic'>
            An{' '}
            <a
              href='https://elevenfifty.org/courses/full-time-immersive/web-development/'
              target='_blank'
              rel='noreferrer'
              className='text-danger'
            >
              Eleven Fifty Academy
            </a>{' '}
            team project by teammates:
          </h3>
          <p className='lead'>
            <a
              href='https://github.com/AmberRenfro'
              target='_blank'
              rel='noreferrer'
              className='text-warning'
            >
              Amber Renfro
            </a>{' '}
            and{' '}
            <a
              href='https://github.com/robertlanchsweerdt'
              target='_blank'
              rel='noreferrer'
              className='text-warning'
            >
              Robert Lanchsweert
            </a>
          </p>
          <Button
            color='danger'
            text-color='white'
            className='btn-login btn-lg d-block mx-auto text-uppercase mt-5 fs-4'
          >
            <Link to='/sign-in'>Sign In</Link>
          </Button>
        </div>
        <img src={movieImg} alt='' />
      </Container>
    </>
  );
};

export default Home;
