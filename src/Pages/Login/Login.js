import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Get Firebase Info
  const { logIn } = useContext(AuthContext);
  // Login error State
  const [loginError, setLoginError] = useState("");

  // Navigate
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        setLoginError("");
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <div className=" card-actions justify-end mx-6">
        <Link to="/ragister" className=" btn btn-accent text-white">
          SIGN UP <FaArrowRight className="w-6 ms-2"></FaArrowRight>
        </Link>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 hidden lg:block">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
          </div>
          {/* react hook form  */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              {/* email  */}
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                className="input input-bordered"
                defaultValue=""
                placeholder="email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="font-semibold text-error">
                  This field is required
                </span>
              )}
              {/* password  */}
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                className="input input-bordered"
                defaultValue=""
                placeholder="password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="font-semibold text-error">
                  This field is required
                </span>
              )}

              {/* Forget Password  */}
              <label className="label">
                <Link href="#" className="label-text-alt ">
                  New to this Website? Please ,
                  <Link
                    to="/ragister"
                    className="label-text link-hover font-semibold"
                  >
                    {"  "}
                    SIGN UP
                  </Link>
                </Link>
              </label>
              {/* set Login error  */}
              <div>
                {loginError && (
                  <p className="text-error">Password is not match</p>
                )}
              </div>
              {}
              {/* submit btn  */}
              <input
                className="btn btn-accent mt-5  text-white"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
