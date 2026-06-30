import React, { useState, useEffect } from 'react';
import TodoDataService from '../services/todos';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CardBody from 'react-bootstrap/esm/CardBody';
import Alert from 'react-bootstrap/Alert';
import moment from 'moment';

function TodoList(props) {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        retrieveTodos()
    }, [props.token])

    const retrieveTodos = async () => {
        try {
            const response = await TodoDataService.getAll(props.token);
            setTodos(response.data);
        } catch (e) {
            console.log("Todos_List", e);
        }
    };

    const deleteTodo = async (todoId) => {
        try {
            await TodoDataService.deleteTodo(todoId, props.token);
            await retrieveTodos(props.token);
        } catch (e) {
            console.log(e);
        }
    }

    const completeTodo = async (todoId) => {
        try {
            await TodoDataService.completeTodo(todoId, props.token);
            await retrieveTodos(props.token);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            {props.token == null || props.token === null ? (
                <Alert variant='warning'>
                    You are not logged in. Please <Link to={"/login"}>login</Link> to see your todos.
                </Alert>

            ) : (<div>
                <Link to={"/todos/create"}>
                    <Button variant="outline-info" className="mb-3">
                        Add To-do
                    </Button>
                </Link>
                {todos.map((todo) => {
                    return (
                        <Card key={todo.id} className="mb-4">
                            <CardBody>
                                <div className={todo.completed ? "text-decoration-line-through" : ""}>
                                    <Card.Title className='mb-3'>{todo.title}</Card.Title>
                                    <Card.Text className='mb-1'><b>Memo: </b>{todo.memo}</Card.Text>
                                    <Card.Text className='mb-3'><b>Date created:</b> {moment(todo.created).format("Do  MMMM YYYY")}</Card.Text>
                                </div>
                                
                                { !todo.completed && <Link to={`/todos/${todo.id}`}
                                    state={{
                                        currentTodo: todo
                                    }}
                                >
                                    <Button variant='outline-info' className='me-2'>
                                        Edit
                                    </Button>
                                </Link>
                                }
                                <Button variant='outline-danger' className='me-2' onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </Button>
                                <Button variant='outline-success' onClick={() => completeTodo((todo.id))}>
                                    Complete
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
            )}
        </Container>
    )
}

export default TodoList;