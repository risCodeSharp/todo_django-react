import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUser = e => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    const login = (e) => {
        e.preventDefault();
        props.login({username: username, password: password});        
    };
    
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={onChangeUser} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Enter password"
                    />
                </Form.Group>
                <Button variant="primary" onClick={login}>Submit</Button>
            </Form>
        </Container>
    )
}

export default Login;