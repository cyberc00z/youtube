import React , {useState} from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

export default function ForgetPassword(){
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);
        setEmail("");
        console.log("Forget Password !");

    }

    return (
        <div className="forgetpassword">
           <Card>
                <Card.Body>
                   <h2 className="text-center mb-4">Forget Password </h2>
                   {error && <Alert variant="danger">{error}</Alert>} 
                   <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                        <Form.Label>
                            Your Registered Email
                        </Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </Form.Group>
                    <Button disabled={loading} className="w-100 mt-4" type="submit">
                          Send Link 
                    </Button>
                   </Form>
                </Card.Body>
           </Card>
           <div className="w-100 text-center mt-2">
              Don't Have an Account ? <Link to="/register">Register</Link>
           </div>
        </div>
    )
}
