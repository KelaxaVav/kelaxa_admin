
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function LockScreen() {
  return (
    <>
      <div className="auth-page">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-center">
            <div className="col-xxl-3 col-lg-4 col-md-5">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      {/* <Link to={"/"} className="d-block auth-logo">
                      <img src="/assets/images/logo-sm.svg" alt="" height="24" />
                        <img src="assets/images/logo-sm.svg" height={28} /> <span className="logo-txt">TMS</span>
                      </Link> */}
                      <span className="logo-lg">
                                        <img src="/assets/images/logo-sm.svg" alt="" height="34" /> <span className="logo-txt">Kelaxa</span>
                                    </span>
                    </div>
                    <div className="auth-content my-auto">
                      {/* <div className="text-center">
                        <h5 className="mb-0">Lock Screen</h5>
                        <p className="text-muted mt-2">Enter your password to unlock the screen!</p>
                      </div> */}
                      <div className="user-thumb text-center mb-4 mt-4 pt-2">
                        <img src="assets/images/users/avatar-10.jpg" className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                        <h5 className="font-size-15 mt-3">Kopana Panchalingam</h5>
                      </div>
                      <form className="mt-14" >
                        <div className="mb-3">
                          <label className="form-label" htmlFor="username">User Name</label>
                          <input type="username" className="form-control" id="username" placeholder="Enter username" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="userpassword">Password</label>
                          <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                        </div>
                        {/* <div className="mb-3 mt-4">
                          <button onClick={Route('/dashboard')} className="btn btn-primary w-100 waves-effect waves-light" type="submit">Unlock</button>
                        </div> */}
                          <Link to={"/"} className="d-block auth-logo">
                          <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Unlock</button>
                      </Link>
                      </form>
                      <div className="mt-5 text-center">
                        <p className="text-muted mb-0">Not you ? return <a href="auth-login.html" className="text-primary fw-semibold"> Sign In </a> </p>
                      </div>
                    </div>
                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">© Transaction Management System    . Crafted with <i className="mdi mdi-heart text-danger" /> by Kopana</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end auth full page content */}
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container fluid */}
      </div>

    </>
  )
}

LockScreen.propTypes = {}

export default LockScreen
