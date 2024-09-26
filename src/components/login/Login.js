import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [validated, setValidated] = useState(false);

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        let valid = true;
        let newErrors = { email: "", password: "" };

        if (!validateEmail(email)) {
            valid = false;
            newErrors.email = "Invalid email";
        }

        if (password.length < 8) {
            valid = false;
            newErrors.password = "Password must be at least 8 characters long";
        }

        setErrors(newErrors);
        setValidated(true);

        if (valid && form.checkValidity()) {
            navigate("/home");
        }
    }

    return (
        <div
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <div style={{ width: '25rem', backgroundColor: "white", borderRadius: ".375rem", padding: ".375rem .75rem" }}>
                        <p className="fs-3 fw-semibold">Log in</p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    required 
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    value={password} 
                                    onChange={handlePasswordChange} 
                                    required 
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <span className="d-flex justify-content-start">
                                <Button className="p-2" variant="primary" type="submit" style={{ width: "60%" }}>
                                    Log in
                                </Button>{' '}
                            </span>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Login;
