import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      country: "",
      state: "",
      city: "",
      description: ""
    },
    validate: (values) => {
      let error = {};

      if (values.firstName === "" || values.firstName.length <= 3 || values.firstName.length >= 15) {
        error.firstName = "Please Enter Firstname";
      }

      if (values.email === "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = "Please Enter Email";
      }

      if (values.contact === "" || !/^[0-9]+$/.test(values.contact) || values.contact.length !== 10) {
        error.contact = "Please Enter a valid 10-digit number";
      }

      if (values.country === "" || values.country.length <= 3 || values.country.length >= 15) {
        error.country = "Please Enter Country";
      }

      if (values.state === "" || values.state.length <= 3 || values.state.length >= 15) {
        error.state = "Please Enter State";
      }

      if (values.city === "" || values.city.length <= 3 || values.city.length >= 15) {
        error.city = "Please Enter City";
      }

      return error;
    },
    onSubmit: (values) => {
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      registeredUsers.push({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email
      });
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

      alert('Registration Successful! You have registered successfully.');
      navigate('/login'); // Navigate to the login page
    }
  });

  return (
    <div className='container'>
      <h1>Registration Form</h1>
      <div className='row mt-5'>
        <form onSubmit={formik.handleSubmit}>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-6'>
                <label>First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  className={`form-control ${formik.errors.firstName ? 'is-invalid' : ''}`}
                />
                <span style={{ color: 'red' }}>{formik.errors.firstName}</span>
              </div>
              <div className='col-lg-6'>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  className='form-control'
                />
              </div>
            </div>
          </div>
          <div className='col-lg-12 mt-3'>
            <div className='row'>
              <div className='col-lg-6'>
                <label>Email*</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
                />
                <span style={{ color: 'red' }}>{formik.errors.email}</span>
              </div>
              <div className='col-lg-6'>
                <label>Contact*</label>
                <input
                  type="text"
                  name="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  className={`form-control ${formik.errors.contact ? 'is-invalid' : ''}`}
                />
                <span style={{ color: 'red' }}>{formik.errors.contact}</span>
              </div>
            </div>
          </div>
          <div className='col-lg-12 mt-3'>
            <div className='row'>
              <div className='col-lg-4'>
                <label>Country*</label>
                <input
                  type="text"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  className={`form-control ${formik.errors.country ? 'is-invalid' : ''}`}
                />
                <span style={{ color: 'red' }}>{formik.errors.country}</span>
              </div>
              <div className='col-lg-4'>
                <label>State*</label>
                <input
                  type="text"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  className={`form-control ${formik.errors.state ? 'is-invalid' : ''}`}
                />
                <span style={{ color: 'red' }}>{formik.errors.state}</span>
              </div>
              <div className='col-lg-4'>
                <label>City*</label>
                <input
                  type="text"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  className={`form-control ${formik.errors.city ? 'is-invalid' : ''}`}
                />
                <span style={{ color: 'red' }}>{formik.errors.city}</span>
              </div>
            </div>
          </div>
          <div className='col-lg-12 mt-4'>
            <div className='row'>
              <div className='col-lg-12'>
                <label>Description</label>
                <textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  className='form-control'
                ></textarea>
              </div>
            </div>
          </div>
          <div className='col-lg-12 mt-5'>
            <div className='row'>
              <div className='col-lg-12'>
                <button type="submit" className="btn btn-success">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
