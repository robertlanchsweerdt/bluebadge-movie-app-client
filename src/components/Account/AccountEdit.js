import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import APIURL from '../../helpers/environment';

const AccountEdit = (props) => {
  const [editUsername, setEditUsername] = useState(
    props.accountToUpdate.username
  );
  const [editPassword, setEditPassword] = useState(
    props.accountToUpdate.password
  );
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

  const accountUpdate = (event, account) => {
    event.preventDefault();
    if (usernameRegex.test(editUsername) !== true) {
      return usernameAlert();
    }
    if (passwordRegex.test(editPassword) !== true) {
      return passwordAlert();
    }
    fetch(`${APIURL}/user/update/`, {
      method: 'PUT',
      body: JSON.stringify({ username: editUsername, password: editPassword }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    }).then((response) => {
      props.fetchAccount();
      props.updateOff();
    });
  };

  return (
    <div>
      <Modal isOpen={true}>
        <ModalHeader>Edit Account Info</ModalHeader>
        <ModalBody>
          <Form onSubmit={accountUpdate}>
            <FormGroup>
              <Label htmlfor='username'>Edit Username:</Label>
              <Input
                name='username'
                value={editUsername}
                onChange={(e) => setEditUsername(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlfor='password'>Edit Password:</Label>
              <Input
                name='password'
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
              ></Input>
            </FormGroup>
            <br />

            <Button type='submit' color='danger'>
              Save Changes
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AccountEdit;
