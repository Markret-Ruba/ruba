import React from 'react';
import './Login.css'; // For custom styling

function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-lg-4 col-md-6 col-sm-8 col-xs-12 text-center login-box">
                <h1 className="log mb-5">Log In</h1>
                <p className="faSignupTitle mb-4">
                    <a href="/sign-up/" className="text-decoration-none">
                        Want a Luxury Life? <b>Join Villa.com now.</b>
                    </a>
                </p>

                <form id="signin-form" method='post' action="javascript:void(0);" onsubmit="alert('Login Successfully');" className="formField" noValidate>
                    <fieldset>
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                tabIndex="1"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                tabIndex="2"
                            />
                        </div>
                        <div className="text-end mb-4">
                            <a href="" className="text-muted small">
                                Forgot Password?
                            </a>
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">
                                Log In
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Login;
