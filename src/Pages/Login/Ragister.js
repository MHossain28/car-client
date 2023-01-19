import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Ragister = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Get Firebase Info
  const { createUser, updateUser, googleLogIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");

        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  // Google Login Handle
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mb-20">
      <div className=" card-actions justify-end mx-6 ">
        <Link to="/ragister" className=" btn btn-accent text-white">
          LOG IN <FaArrowRight className="w-6 ms-2"></FaArrowRight>
        </Link>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center d-none lg:block lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>

            <p className="py-6  ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
          </div>

          {/* react hook form  */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h3 className="text-2xl text-center font-semibold mt-5">SIGN UP</h3>
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
              {/* name  */}
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                className="input input-bordered"
                defaultValue=""
                placeholder="name"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.email && (
                <span className="text-error">This field is required</span>
              )}
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
                <span className="text-error">This field is required</span>
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
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
              />
              {errors.password && (
                <span className="text-error">This field is required</span>
              )}

              {/* Forget Password  */}
              <label className="label">
                <Link href="#" className="label-text-alt ">
                  Already have an Acount? Please ,
                  <Link
                    to="/login"
                    className="label-text link-hover font-semibold"
                  >
                    {"  "}
                    Login
                  </Link>
                </Link>
              </label>
              {/* set error signUp */}
              <div>
                {signUpError && <p>Already Use this Email. Please, Login</p>}
              </div>
              {/* submit btn  */}
              <input
                className="btn btn-accent mt-5  text-white"
                type="submit"
              />
              <h6 className="text-center">
                <hr /> OR
              </h6>
              {/* submit btn  */}
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-accent mt-5  text-white"
              >
                <FaGoogle className="w-6"></FaGoogle>
                login With Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
