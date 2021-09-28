import React, {useState, useEffect} from 'react'
import AccountEdit from './AccountEdit'
import {Button, Container, Card, CardTitle, CardText} from 'reactstrap';

const AccountIndex = (props) => {
    const [account, setAccount] = useState([])
    const [updateActive, setUpdateActive] = useState(false);
    const [accountToUpdate, setAccountToUpdate] = useState({})
   
    

    const fetchAccount = () => {
        fetch('http://localhost:4000/user/mine', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((response) => response.json())
        .then((accountData) => {
            setAccount(accountData);
            
            console.log(accountData)
            console.log(account)
            
            
            
        })
    } 
    
    const editUpdateAccount = (account) => {
        setAccountToUpdate(account)
        console.log(account);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }
    
    useEffect(() => {
        if(props.token !== undefined){
            fetchAccount();
        }
    },[props.token])
    return (
        <Container style={{textAlign:'center'}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <Card body outline color='danger' style={{height: '300px'}}>
                <CardTitle style={{color: 'black', fontWeight:'700', fontSize: '50px'}} >{(typeof account.userAccount != 'undefined')?('Username'+ ' ' + ': ' + account.userAccount[0].username) : (<div></div>)}</CardTitle>
                <br/>
                <br/>
                <CardText>
                    <Button variant='primary' color='danger' style={{fontSize: '30px'}} onClick={() => {editUpdateAccount(account); updateOn()}}>Update Account Info</Button>
                </CardText>
            </Card>
            {updateActive ? <AccountEdit account={account} updateOn={updateOn} updateOff={updateOff} editUpdateAccount={editUpdateAccount} fetchAccount={fetchAccount} token={props.token} accountToUpdate={accountToUpdate}/> : <></>}
        </Container>
    )
}

export default AccountIndex
