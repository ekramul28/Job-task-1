import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
// import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState([])
    // const { loginUser } = useAuth()
    const handelForm = async (e) => {
        // e.preventDefault();
        // const form = e.target;
        // const email = form.email.value;
        // const password = form.password.value;
        // setError('')
        // try {
        //     const result = await loginUser(email, password)
        //     console.log(result)
        //     if (result.user) {
        //         form.reset();
        //         Swal.fire('Login Successful');
        //         navigate((location?.state?.pathname) ? location?.state.pathname : '/')
        //     }
        // } catch {
        //     error => {
        //         setError(error.message);
        //     }
        // }
    }
    const googleClick = () => {

    }


    return (
        <div className="hero  min-h-screen dark:bg-slate-800  ">
            <div className="max-w-7xl mx-auto  md:flex justify-center">
                <div className="hidden md:block">
                    <img src="https://i.ibb.co/8jFYK8c/Lovepik-com-450092341-Flat-illustration-of-secure-login-in-editable-design-removebg-preview.png" alt="" />
                </div>
                <div className="hero-content flex-col ">

                    <div className=" rounded-none flex-shrink-0 w-full dark:text-white    ">
                        <form onSubmit={handelForm} className="card-body w-80 md:w-[400px]  lg:w-[500px]">
                            <h1 className="text-5xl font-bold  dark:text-sky-500 ">Login</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input  input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered rounded-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control ">
                                <button className="btn  text-white dark:bg-sky-500 bg-amber-600 dark:text-white border-none rounded-none">Login</button>
                                <div className="mt-3">
                                    <p>You do not have an Account Please <Link to="/register" className="text-amber-600 text-2xl">Register</Link></p>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-red-500">{error}</h1>
                                </div>
                                <div className="divider">OR</div>
                                <div onClick={googleClick} className=" border-2 border-white p-4 rounded-xl mt-5">
                                    <p className="flex justify-center items-center gap-3 text-xl font-semibold text-white"><FcGoogle /> Continue With Google</p>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;