import React, { useState } from 'react';
import { Container, Button, FormGroup, Form, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import APIURL from '../../helpers/environment';

const SignIn = (props) => {
  const [usernameSignup, setUsernameSignup] = useState('');
  const [passwordSignup, setPasswordSignup] = useState('');
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [success, setSuccess] = useState(false);
  const usernameRegex = /(^.*(?=.*[A-Za-z .])(?=.{3,})(?=.*[!@#$%^&*_0-9]).*$)/;
  const passwordRegex = /^[A-Za-z_0-9_!@#$%^&* .]{5,20}$/;

  const usernameAlert = () => {
    alert(
      'Username requires at least 4 characters and 1 number or special character'
    );
  };

  const passwordAlert = () => {
    alert('Password requires at least 5 characters');
  };

  if (success === true) {
    return <Redirect to='/movie-api' />;
  }

  let handleSubmitSignup = (event) => {
    event.preventDefault();
    if (usernameRegex.test(usernameSignup) !== true) {
      return usernameAlert();
    }
    if (passwordRegex.test(passwordSignup) !== true) {
      return passwordAlert();
    }
    fetch(`${APIURL}/user/register`, {
      method: 'POST',
      body: JSON.stringify({
        username: usernameSignup,
        password: passwordSignup,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.user.token);
        props.updateToken(data.user.token);
        setSuccess(true);
      })
      .catch((e) =>
        alert(
          `${e}
    
       [ POSSIBLE SOLUTION ] -->
  
       409 (Conflict) Username is taken`
        )
      );
  };

  let handleSubmitLogin = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: usernameLogin,
        password: passwordLogin,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.updateToken(data.token);
        setSuccess(true);
      });
  };

  return (
    <>
      <Container className='mt-5'>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmitSignup}>
          <FormGroup>
            <Label htmlFor='username'>Username</Label>
            <Input
              onChange={(e) => setUsernameSignup(e.target.value)}
              name='username'
              value={usernameSignup}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='password'>Password</Label>
            <Input
              onChange={(e) => setPasswordSignup(e.target.value)}
              name='password'
              value={passwordSignup}
            />
          </FormGroup>
          <Button color='danger' type='submit'>
            Sign Up
          </Button>
        </Form>
        <h1>Log In</h1>
        <Form onSubmit={handleSubmitLogin}>
          <FormGroup>
            <Label htmlFor='username'>Username</Label>
            <Input
              onChange={(e) => setUsernameLogin(e.target.value)}
              name='username'
              value={usernameLogin}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='password'>Password</Label>
            <Input
              onChange={(e) => setPasswordLogin(e.target.value)}
              name='password'
              value={passwordLogin}
            />
          </FormGroup>
          <Button color='danger' type='submit'>
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
