import React, { useState } from 'react';
import TodoDataService from '../services/todos';
import { Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function AddTodo(props) {

    const location = useLocation();

    let editing = !!location.state?.currentTodo;
    let initialTodoTitle = location.state?.currentTodo?.title ?? "";
    let initialTodoMemo = location.state?.currentTodo?.memo ?? "";


    const [title, setTitle] = useState(initialTodoTitle);
    const [memo, setMemo] = useState(initialTodoMemo);

    // keeps track if todo is submitted
    const [submitted, setSubmitted] = useState(false);

    const onChangeTitle = e => {
        const title = e.target.value;
        setTitle(title);
    };

    const onChangeMemo = e => {
        const memo = e.target.value;
        setMemo(memo);
    };

    const saveTodo = async () => {
        var data = {
            title: title,
            memo: memo,
            completed: false,
        }

        if (editing) {
            try {
                console.log("IT is a update request");
                await TodoDataService.updateTodo(location.state.currentTodo.id, data, props.token);
                setSubmitted(true);
            } catch (e) {
                console.error("Add Todo: ", e);
            }
        } else {
            console.log("IT is a create request");
            try {
                await TodoDataService.createTodo(data, props.token);
                setSubmitted(true);
            } catch (e) {
                console.error("Add Todo: ", e);
            }
        }
    }


return (
    <Container>
        {submitted ? (
            <div>
                <h4>Todo submitted successfully</h4>
                <Link to={"/todos/"}>Back to todos</Link>
            </div>
        ) : (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>{editing ? "Editing" : "Create"} Todo</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder='e.g. but gift tomorrow'
                        value={title}
                        onChange={onChangeTitle}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Memo</Form.Label>
                    <Form.Control
                        as="textarea"
                        required
                        rows={3}
                        value={memo}
                        onChange={onChangeMemo}
                    />
                </Form.Group>
                <Form.Group>
                    <Button variant="info" onClick={saveTodo}>
                        {editing ? "Edit" : "Add"} To-do
                    </Button>
                </Form.Group>
            </Form>
        )}
    </Container>
)
}

export default AddTodo;