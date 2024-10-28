import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Http from '../tools/Http';
import { toast } from 'react-toastify';

function LoginScreen() {
  const [data, setData] = useState({ username: "admin", password: "Abcd@1234", is_remember: false });

  //Change Input Type Of Password
  const [inputType, setInputType] = useState('password')

  const toggleInput = () => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  //End Change Input Type Of Password

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await Http.post('/auth/login', data);
      console.log(response);
      if (response && response.data && response.data.data && response.data.data.user) {
        let data = response.data
        toast.success(data.meta.message)
        if (data.data && data.data.access_token) {
          localStorage.setItem('token', data.data.access_token)
        }
        navigate("/")
      }
      // toast.success{}
    } catch (error) {
      toast.error('Login Failed !')

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="auth-page">
        <div className="container-fluid p-0">
          <div className="row g-0 d-flex justify-content-center">
            <div className="col-md-5">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <span className="logo-lg">
                        <img src="/assets/images/logo-sm.svg" alt="" height="34" /> <span className="logo-txt">Kelaxa</span>
                      </span>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Welcome Back !</h5>
                        <p className="text-muted mt-2">Sign in to continue to Kelaxa.</p>
                      </div>
                      <form className="mt-4 pt-2" onSubmit={onSubmit}>
                        <div className="mb-3">
                          <label className="form-label">Username</label>
                          <input type="text" className="form-control" id="username" value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} placeholder="Enter username" />
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="flex-grow-1">
                              <label className="form-label">Password</label>


                            </div>
                            <div className="flex-shrink-0">
                              <div>
                                <Link to={"/forgot-password"}>
                                  <span className="text-muted">Forgot password?</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="input-group auth-pass-inputgroup">
                            <input type={inputType} className="form-control" id="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Enter Password" />
                            <button title='passwordTypeBtn' onClick={toggleInput} className="btn btn-light shadow-none ms-0" type="button" id="password-addon" ><i className="mdi mdi-eye-outline" /></button>
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="remember-check" checked={data.is_remember} onChange={(e) => setData({ ...data, is_remember: !data.is_remember })} />
                              <label className="form-check-label" htmlFor="remember-check">
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Login</button>
                        </div>
                      </form>

                    </div>
                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">©  KELAXA Admin  . <i className="mdi mdi-heart text-danger" /> by P.Kopana</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end auth full page content */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container fluid */}
      </div>

    </>
  )
}


export default LoginScreen
