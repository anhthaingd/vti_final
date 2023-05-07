import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./login.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button, Link } from "@mui/material";
import UserApi from "../../api/UserApi";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  const [isDisable, setIsDisable] = useState(false);

  const navigate = useNavigate();
  const comeRegister = () => {
    navigate("/register");
  };
  const comeDashboard = () => {
    navigate("/");
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be at least 3 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          setIsDisable(true);
          const response = await UserApi.login(
            values.username,
            values.password
          );

          console.log(response);
          if (response) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.userName);
            comeDashboard();
          }

          setIsDisable(false);
        } catch (error) {
          setIsDisable(false);
          console.error();
        }
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched }) => (
        <MDBContainer fluid className="p-3 my-5 h-custom">
          <Form>
            <MDBRow>
              <MDBCol col="10" md="6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="img-fluid"
                  alt="Sample image"
                />
              </MDBCol>

              <MDBCol col="4" md="6">
                {/* <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                  <MDBBtn floating size="md" tag="a" className="me-2">
                    <MDBIcon fab icon="facebook-f" size="lg" className="me-0" />
                  </MDBBtn>

                  <MDBBtn floating size="md" tag="a" className="me-2">
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>

                  <MDBBtn floating size="md" tag="a" className="me-2">
                    <MDBIcon fab icon="linkedin-in" />
                  </MDBBtn>
                </div> */}
                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Continue with facebook
                </MDBBtn>

                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#55acee" }}
                >
                  <MDBIcon fab icon="twitter" className="mx-2" />
                  Continue with twitter
                </MDBBtn>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <Field
                  name="username"
                  render={({ field }) => (
                    <>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="User Name"
                        size="lg"
                        id="form1"
                        type="text"
                        {...field}
                        className={
                          errors.username && touched.username
                            ? "is-invalid"
                            : ""
                        }
                      />
                      <ErrorMessage name="username" component="small" />
                    </>
                  )}
                />
                <Field
                  name="password"
                  render={({ field }) => (
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      size="lg"
                      id="form3"
                      type="password"
                      {...field}
                      className={
                        errors.password && touched.password ? "is-invalid" : ""
                      }
                    />
                  )}
                />
                <ErrorMessage name="password" component="small" />

                <div className="d-flex justify-content-between mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                  <a href="!#">Forgot password?</a>
                </div>

                <div className="text-center text-md-start mt-4 pt-2">
                  <MDBBtn
                    className="mb-0 px-5"
                    size="lg"
                    type="submit"
                    disabled={isDisable}
                  >
                    Login
                  </MDBBtn>
                  <p className="big fw-bold mt-2 pt-1 mb-2">
                    Don't have an account?
                    <Button className="link-danger" onClick={comeRegister}>
                      Register
                    </Button>
                  </p>
                </div>
              </MDBCol>
            </MDBRow>

            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary fixed-bottom">
              <div className="text-white mb-3 mb-md-0 ">
                Copyright © 2020. All rights reserved.
              </div>
            </div>
          </Form>
        </MDBContainer>
      )}
    </Formik>
  );
};

export default Login;
