import React from 'react'
import { useFormik } from 'formik'

function Register() {
  const formik = useFomik({
    initialValues: {
      firstName: "rubs",
      lastName: "",
      email: "",
      contact: "",
      country: "",
      state: "",
      city: "",
      description: ""

    }
   
  })
  return (
    <div className='container'>
      <h1>Registration Form</h1>
      <div className='row'>

        <form>
          <div className='col-lg-12 '>
            <div className='row'>
              <div className='col-lg-6'>
                <label htmlFor=''>First Name*</label>
                <input type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} className='form-control' />
              </div>
              <div className='col-lg-6'>
                <label htmlFor=''>Last Name</label>
                <input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} className='form-control' />
              </div>
            </div>
          </div>
          <div className='col-lg-12 mt-3'>
            <div className='row'>
              <div className='col-lg-6'>
                <label htmlFor=''>Email*</label>
                <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} className='form-control' />
              </div>
              <div className='col-lg-6'>
                <label htmlFor=''>Contact*</label>
                <input type="text" name="contact" value={formik.values.contact} onChange={formik.handleChange} className='form-control' />
              </div>
            </div>
          </div>
          <div className='col-lg-12 mt-3' >
            <div className='row'>
              <div className='col-lg-4'>
                <label htmlFor=''>Country*</label>
                <input type="text" name="country" value={formik.values.country} onChange={formik.handleChange} className='form-control' />
              </div>
              <div className='col-lg-4'>
                <label htmlFor=''>State*</label>
                <input type="text" name="state" value={formik.values.state} onChange={formik.handleChange} className='form-control' />
              </div>
              <div className='col-lg-4'>
                <label htmlFor=''>City*</label>
                <input type="text" name="city" value={formik.values.city} onChange={formik.handleChange} className='form-control' />
              </div>
            </div>
          </div>
          <div className='col-lg-12 mt-4'>
            <div className='row'>
              <div className='col-lg-12 '>
                <label htmlFor=''>Description</label>
                <textarea name="description" value={formik.values.description} onChange={formik.handleChange} id="" className='form-control'></textarea>
              </div>
            </div>
          </div>
          <div className='col-lg-12 mt-5 '>
            <div className='row'>
              <div className='col-lg-12'>
                <input type="submit" className='btn btn-primary'></input>
              </div>
              </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Register
