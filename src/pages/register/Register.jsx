import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import * as Yup from "yup";
import "./register.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import UserApi from "../../api/UserApi";
function App() {
  const navigate = useNavigate();
  const comeLogin = (e) => {
    navigate("/login");
  };
  const imageStyle = {
    backgroundImage:
      "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
    height: "100vh",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be at least 3 characters")
      .required("Username is required"),
    // .test(
    //   "checkExistsUsername",
    //   "This Username is already registed",
    //   async (username) => {
    //     var isExists = await UserApi.existsByUsername(username);
    //     console.log(isExists);
    //     return !isExists.data;
    //   }
    // ),
    email: Yup.string().email("Invalid email").required("Email is required"),
    // .test(
    //   "checkExistsEmail",
    //   "This Email is already registed",
    //   async (email) => {
    //     var isExists = await UserApi.existsByEmail(email);
    //     console.log(isExists);
    //     return !isExists.data;
    //   }
    // ),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    firstName: Yup.string()
      .min(3, "Firstname must be at least 3 characters")
      .required("Firstname is required"),
    lastName: Yup.string()
      .min(3, "Lastname must be at least 3 characters")
      .required("Lastname is required"),
  });
  const [isDisable, setIsDisable] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            setIsDisable(true);
            const response = await UserApi.create(
              values.firstName,
              values.lastName,
              values.email,
              values.password,
              values.username
            );
            console.log(response);
            console.log("hi");
          } catch (error) {
            console.error();
          }
          comeLogin();
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <MDBContainer
            fluid
            className="d-flex align-items-center justify-content-center bg-image"
            style={imageStyle}
          >
            <div className="mask gradient-custom-3"></div>
            <MDBCard className="m-5" style={{ maxWidth: "700px" }}>
              <Form className="px-5">
                <h2
                  className="text-uppercase text-center mb-5"
                  style={{ paddingTop: "20px" }}
                >
                  Create an account
                </h2>
                <Field
                  name="username"
                  render={({ field }) => (
                    <div style={{ maxHeight: "76px" }}>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="User Name"
                        size="lg"
                        id="form1"
                        style={{ margin: "0" }}
                        type="text"
                        {...field}
                        className={
                          errors.username && touched.username
                            ? "is-invalid"
                            : ""
                        }
                      ></MDBInput>
                      {errors.username && touched.username ? (
                        <ErrorMessage
                          name="username"
                          className="error-message"
                          component="small"
                        />
                      ) : null}
                    </div>
                  )}
                />
                <Field
                  name="email"
                  render={({ field }) => (
                    <div style={{ maxHeight: "76px" }}>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Your Email"
                        size="lg"
                        id="form2"
                        type="email"
                        {...field}
                        className={
                          errors.email && touched.email ? "is-invalid" : ""
                        }
                      />
                      {errors.email && touched.email ? (
                        <ErrorMessage
                          name="email"
                          className="error-message"
                          component="small"
                        />
                      ) : null}
                    </div>
                  )}
                />

                <Field
                  name="firstName"
                  render={({ field }) => (
                    <div style={{ maxHeight: "76px" }}>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        size="lg"
                        id="form4"
                        type="text"
                        {...field}
                        className={
                          errors.firstName && touched.firstName
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {errors.firstName && touched.firstName ? (
                        <ErrorMessage
                          name="firstName"
                          className="error-message"
                          component="small"
                        />
                      ) : null}
                    </div>
                  )}
                />
                <Field
                  name="lastName"
                  render={({ field }) => (
                    <div style={{ maxHeight: "76px" }}>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        size="lg"
                        id="form5"
                        type="text"
                        {...field}
                        className={
                          errors.lastName && touched.lastName
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {errors.lastName && touched.lastName ? (
                        <ErrorMessage
                          name="lastName"
                          className="error-message"
                          component="small"
                        />
                      ) : null}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ field }) => (
                    <div style={{ maxHeight: "76px" }}>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        size="lg"
                        id="form3"
                        type="password"
                        {...field}
                        className={
                          errors.password && touched.password
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {errors.password && touched.password ? (
                        <ErrorMessage
                          name="password"
                          className="error-message"
                          component="small"
                        />
                      ) : null}
                    </div>
                  )}
                />
                {errors.password && touched.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
                <Field
                  name="confirmPassword"
                  render={({ field }) => (
                    <div style={{ maxHeight: "76px" }}>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Confirm password"
                      size="lg"
                      id="form4"
                      type="password"
                      {...field}
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "is-invalid"
                          : ""
                      }
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                        <ErrorMessage
                          name="confirmPassword"
                          className="error-message"
                          component="small"
                        />
                      ) : null}
                    </div>
                  )}
                />
                
                <div className="d-flex flex-row justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    label="I agree all statements in Terms of service"
                  />
                </div>
                <MDBBtn
                  className="mb-4 w-100 gradient-custom-4"
                  size="lg"
                  type="submit"
                  disabled={isDisable}
                >
                  Register
                </MDBBtn>
              </Form>
            </MDBCard>
          </MDBContainer>
        )}
      </Formik>
    </>
  );
}

export default App;
