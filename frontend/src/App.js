import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AddTodo from './components/add-todo';
import TodoLists from './components/todo-list';
import Login from './components/login';
import Signup from './components/signup'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoDataService from "./services/todos";
import Container from 'react-bootstrap/Container';

function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  async function login(user = null) {

    TodoDataService.login(user).then(response => {
      setToken(response.data.token);
      setUser(user.username);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", user.username);
      setError("");
      navigate("/");
    }).catch(e => {
      console.log("login", e);
      setError(e.toString());
    });
  }

  async function logout() {
    setToken("");
    setUser("");
    localStorage.setItem("token", "")
    localStorage.setItem("user", "")
  }

  async function signup(user = null) {
    try {
      const response = await TodoDataService.signup(user);

      setToken(response.data.token);
      setUser(user.username);
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", user.username)
      navigate("/");
    } catch (e) {
      console.error("Signup", e);
      setError(e.toString());
    }
  }



  return (
    <div className="App">
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container fluid className=" my-2 position-relative ms-4">

          {/* LEFT */}
          <Navbar.Brand style={{fontFamily: 'Georgia, "Times New Roman", serif'}} className='fs-4'>TodosApp</Navbar.Brand>

          {/* CENTER (absolute centered) */}
          <Nav style={{fontSize: "1.1rem"}}className="position-absolute top-50 start-50 translate-middle d-flex flex-row gap-3">

            <Link className="nav-link" to="/todos">Todos</Link>

            {user ? (
              <Link className="nav-link" onClick={logout}>Logout</Link>
            ) : (
              <>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </>
            )}

          </Nav>

        </Container>
      </Navbar>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<TodoLists token={token} />}>
          </Route>
          <Route path="/todos" element={<TodoLists token={token} />}>
          </Route>
          <Route path="/todos/create" element={
            <AddTodo token={token} />
          }>
          </Route>
          <Route path="/todos/:id/" element={
            <AddTodo token={token} />
          }></Route>
          <Route path="/login" element={
            <Login login={login} />
          }></Route>
          <Route path="/signup" element={
            <Signup signup={signup} />
          }></Route>
        </Routes>
      </div>
      <footer className="text-center text-lg lg-start bg-light text-muted mt-4">
        <div className="text-center p-4">&copy; Copyright - <a target="_blank" className="text-reset fw-bold text-decoration-none" href="https://github.com/risCodeSharp">RisCodeSharp</a></div>

      </footer>
    </div>

  )
}


export default App;