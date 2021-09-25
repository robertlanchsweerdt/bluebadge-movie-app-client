import React, {useState} from 'react';
import { Container, Button, FormGroup, Form, Label, Input } from 'reactstrap';
// comment to push branch to remote repository

const SignIn = (props) => {
  const [usernameSignup, setUsernameSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  let handleSubmitSignup= (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/user/register", {
      method: 'POST',
      body: JSON.stringify({username: usernameSignup, password: passwordSignup}),
      headers: new Headers ({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      console.log(data);
      props.updateToken(data.token)
    })
  }

  let handleSubmitLogin= (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/user/login", {
      method: 'POST',
      body: JSON.stringify({username: usernameLogin, password: passwordLogin}),
      headers: new Headers ({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      console.log(data);
      props.updateToken(data.token)
    })
  }

  return (
    <>
      <Container className='mt-5'>
           <h1>Sign Up</h1>
            <Form onSubmit={handleSubmitSignup}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange = {(e) => setUsernameSignup(e.target.value)} name="username" value={usernameSignup}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange = {(e) => setPasswordSignup(e.target.value)} name="password" value={passwordSignup}/>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
          <h1>Log In</h1>
            <Form onSubmit={handleSubmitLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange = {(e) => setUsernameLogin(e.target.value)} name="username" value={usernameLogin}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange = {(e) => setPasswordLogin(e.target.value)} name="password" value={passwordLogin}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
      </Container>
    </>
  );
};

export default SignIn;
