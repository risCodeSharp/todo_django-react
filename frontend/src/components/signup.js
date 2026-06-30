import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Signup(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = e => {
        e.preventDefault();
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = e => {
        e.preventDefault();
        const password = e.target.value;
        setPassword(password);
    }

    const signup = () => {
        props.signup({
            username: username,
            password: password,
        });
    }


    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={onChangeUsername}
                        placeholder="Enter username"

                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Enter password"
                        onChange={onChangePassword}
                        value={password}
                    />
                </Form.Group>
                <Button variant="primary" onClick={signup}>Sign Up</Button>
            </Form>
        </Container>
    )
}

export default Signup;