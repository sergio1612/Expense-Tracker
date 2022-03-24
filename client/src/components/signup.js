import React from "react";
import "../styles/signup.css";
import Header from "./Header";
import { useNavigate} from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { instance } from "../utils/AxiosConfig";
var obj = {};
const SignUp = (props) => {
  const navigate = useNavigate()
  const initialValueSchema = {
    name: "",
    email: "",
    password: "",
  };
 
  // form validation using yup library
  const formValidationSchema = yup.object().shape({
    name: yup.string().required("Name is Required!"),
    email: yup.string().required("Email is Required!"),
    password: yup.string().required("Password is Required!"),
  });

  return (
    <div>
      <Header />
      <div className="container signup">
        <div className="row">
          <div className="col-md-6">
            <div>
              <img
                className="signup-logo"
                src={require("../images/signup.svg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="signup-form">
              <h3>Join Us by Introducing Yourself!</h3>
              <Formik
                initialValues={initialValueSchema}
                validationSchema={formValidationSchema}
                onSubmit={(value)=>{
                  localStorage.setItem("user",JSON.stringify(value,null)
                  
                  ); navigate("/login")}}
                
              >
                <Form>  
                  <label htmlFor="">Your Good Name!</label>

                  <Field
                    id="username"
                  //   onChange={(event) => {
                  //     obj[event.target.id] = event.target.value;
                  //   }}
                    name="name"
                    className="form-control"
                    type="text"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="name" />
                  </p>

                  <label htmlFor="">Here’s Your Email Address: </label>

                  <Field
                    id="email"
                  //   onChange={(event) => {
                  //     obj[event.target.id] = event.target.value;
                  //   }}
                    name="email"
                    className="form-control"
                    type="email"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="email" />
                  </p>

                  <label htmlFor="">And here’s Your Password: </label>

                  <Field
                    id="password"
                  //   onChange={(event) => {
                  //     obj[event.target.id] = event.target.value;
                  //   }}
                    name="password"
                    className="form-control"
                    type="password"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="password" />
                  </p>

                  <button
                    // onClick={() => 
                     //  console.log(obj);
                     //  if (
                     //    obj.password == "" ||
                     //    obj.email == "" ||
                     //    obj.username == ""
                     //  ) {
                     //    alert("form is Incomplete");
                     //  } else {
                     //    var pr = instance.post("/signup", obj);
                     //    pr.then((response) => {
                     //      console.log(response.data.Status);
                     //      if (response.data.Status == "S") {
                     //        alert("successful Registerd");
                     //        props.history.push("/Dashboard");
                     //      } else if (response.data.Status == "F") {
                     //        alert("username or Email Id Already exist");
                     //      }
                     //    });
                     //  }
                    
                    className="btn"
                  >
                    Join Now!
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
