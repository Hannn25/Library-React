import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../layouts/Auth'
import {Form, Button} from 'react-bootstrap'
import '../../styles/Login.css'
import bookshelf from '../../assets/bookshelf.png'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const checkUser = (e) => {
    e.preventDefault();
    if (username === "rebecca@gmail.com") {
      if (password === "123") {
        alert("Login Success!");
        window.location.replace("/home");
      } else {
        alert("Please check your password again!");
      }
    } else {
      alert("User not found, please register first!");
    }
  };

  return  <Auth>
    <div className='login'>
    <img className="logo" src={bookshelf} alt=""/>
        <h1>Login</h1>
        <p>Welcome Back, Please login to your account</p>
    </div>
     <Form className='Form-login'>
     <Form.Floating className="mb-3" controlId="floatingInput" label="Username">
        <Form.Control
          onChange={(e) => usernameChange(e)}
          id="floatingInputCustom"
          type="email"
          placeholder="Username"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>

     <Form.Floating controlId="floatingPassword" label="Password">
        <Form.Control
          onChange={(e) => passwordChange(e)}
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit" onClick={(e) => checkUser(e)}>
        Login
      </Button>
      <Link to={"/register"} className="btn button-register shadow btn-md" variant="primary">
        Sign Up
      </Link>
    </Form>
    <footer className='mt-5'>
       <p>
       By signing up, you agree to Book's <br />
      <strong>Terms and Conditions</strong> & <strong>Privacy Policy</strong>
       </p>
    </footer>
    </Auth>
  
}

export default Login
