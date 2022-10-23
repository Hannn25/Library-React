import React from 'react'
import Login from '../Login'
import { Link } from "react-router-dom";
import Auth from '../../layouts/Auth'
import {Form, FloatingLabel} from 'react-bootstrap'
import bookshelf from '../../assets/bookshelf.png'

const Register = () => {
  return <Auth>
      <div className="register">
        <img className="logo" src={bookshelf} alt=""/>
        <h2>Register</h2>
        <p>Welcome Back, Please Register to create account</p>
        </div>
        <form>
        <FloatingLabel controlId="floatingInput" label="Username">
                <Form.Control type="text" placeholder="Username" />
        </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Full Name">
                <Form.Control type="text" placeholder="Full Name" />
          </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email Address">
                <Form.Control type="email" placeholder="Email Address" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password"  />
              </FloatingLabel>
              <Link to={"/login"} className="btn button-login shadow btn-lg me-2 mt-3">
                Login
              </Link>
              <Link to={"/"} className="btn button-register shadow btn-lg ms-1 mt-3">
                Register
              </Link>
              <footer className='mt-5'>
                <p>
                By signing up, you agree to Book's <br />
              <strong>Terms and Conditions</strong> & <strong>Privacy Policy</strong>
                </p>
            </footer>
      </form>
      </Auth>
}

export default Register;