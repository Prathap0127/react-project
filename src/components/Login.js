import axios from 'axios';
import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    let navigate = useNavigate()
    // let [user,setUserData]=useState([])
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let handleLogin = async (event) => {
        try {
            event.preventDefault()
            console.log("hai")
            let res = await axios.get('https://6350def9dfe45bbd55b0529b.mockapi.io/users')
            let userData = res.data
            console.log(userData)
            let loginD = userData.filter((e) => {
                return (e.email === email && e.password === password)
                
            })
            // console.log(loginD[0].email)
            if (loginD.length === 1) {
                alert('login Sucessfull')
                navigate('/dashboard')

            }
            else {
                alert('invalid email and password')
                //    alert('invalid user name and password')
            }
        }
        catch (err) {


        }


    }

    return <Container>
            <h1 className='text-center mt-5'>Welcome to Jewel Shop</h1>
            <Row className="justify-content-center mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <div className='d-flex justify-content-between'>
                        <Link to='register'>
                        <p><span>SignUp / Register</span></p>
                        </Link>
                        <Link>
                        <p><span>Forgot Password?</span></p>
                        </Link>

                    </div>
                    <Button variant="primary" type="submit" onClick={(event) => handleLogin(event)}>
                        Login
                    </Button>
                </Form>
            </Row>
        </Container>
}

export default Login