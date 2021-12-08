import React, { useState } from "react";
import "./Login.css";

import {Form, Button, Card, Alert} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
   
    async function handleSubmit(e) {
        e.preventDefault()
    
          //setError("")
        setLoading(true)
        setEmail("")
        setPassword("")
        console.log('Login complete')
        navigate("/")

    }

    return (
        <>
       <div className="login">
           <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forget-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
       </div>
       <div className="w-100 text-center mt-2">
        Don't Have an Account <Link to="/register">Register</Link>
       </div>
       </>
    )
}

export default Login;