import React , {Fragment, useState, useContext} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, CardImg } from 'reactstrap';

import axios from 'axios'
import { AuthContext } from '../App'
import { request } from 'https'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
const qs = require('querystring')
const api = 'http://localhost:3001'

function LoginComp() {

    const { dispatch } = useContext(AuthContext)
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        const requestBody = {
            email: data.email,
            password: data.password
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(api + '/auth/api/v1/login', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: res.data
                    })
                }
                else {
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: res.data.Message
                    })
                }

                throw res
            })
    }

    return (
        <Fragment>
            <Container>
                <br />
                <Row>   
                    <Col >
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <h1>Login Form</h1></Col>
                        <hr/>
                        <Form onSubmit={handleFormSubmit}>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email"
                                    value={data.email}
                                    onChange={handleInputChange}
                                    name="email" id="exampleEmail"
                                    placeholder="with a placeholder" />
                            </FormGroup>
                            </Col>

                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password"
                                    value={data.password}
                                    onChange={handleInputChange}
                                    name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            </Col>

                            
                            {data.errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {data.errorMessage}
                                </div>
                            )}
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Button  disabled={data.isSubmitting}>
                                {data.isSubmitting ? (
                                    "..Loading"
                                ) :
                                    (
                                        "Login"
                                    )
                                }
                            </Button></Col>
                        </Form>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <p>Belum punya akun? <Link to="/register">Register</Link></p></Col>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default LoginComp;