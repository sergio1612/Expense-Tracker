import React from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export const Login = (props) => {
  // console.log(props.login)
  const initialValueSchema = {
    email: "",
    password: "",
  };
  // form validation using yup library
  const formValidationSchema = yup.object().shape({
    email: yup.string().required("Email is Required!"),
    password: yup.string().required("Password is Required!"),
  });
  const userData = JSON.parse(localStorage.getItem("user"))
  let navigate = useNavigate();
  const verifyUser = (values) => {

    if(userData.email == values.email && userData.password == values.password){
      props.setLogin(true)
      localStorage.setItem("login",true)
      console.log("props",props.login)
      navigate("/Auth/Dashboard")
      // props.setDashboard(true)
    }
    else{
      alert("Invalid Email or Password")
      
    }

  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="login-form">
              <h3>Welcome, Have a great Experience!</h3>
              <Formik
                initialValues={initialValueSchema}
                validationSchema={formValidationSchema}
                onSubmit={(values) => verifyUser(values)}
                
              >
                <Form>
                  <label htmlFor="">Email address</label>
                  <Field
                    id="email"
                    name="email"
                    // onChange={props.input}
                    className="form-control"
                    type="text"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="email" />
                  </p>

                  <label htmlFor="">Password</label>
                  <Field
                    id="password"
                    name="password"
                    // onChange={props.input}
                    className="form-control"
                    type="password"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="password" />
                  </p>
                  {/* 
                  {props.sts && (
                    <p style={{ color: "red" }}>
                      <i class="fas fa-exclamation-circle"></i> Invalid Username
                      or Password
                    </p>
                  )} */}
                  <button  className="btn" >
                    Log In
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="col-md-6">
            <img
            
              className="login-img"
              src={require("../images/login.svg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
