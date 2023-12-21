import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('')
    // const { createUserWithEmail, } = useContext(AuthContext);

    const handelForm = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            return Swal.fire('Password must be at least 6 characters')
        }
        // createUserWithEmail(email, password)
        //     .then(result => {
        //         setRegisterSuccess(result.user);
        //         Swal.fire('Register Successful')
        //     })
        //     .catch(error => {
        //         setRegisterError(error.message);
        //     });

    }
    return (
        <div>
            <div className="hero   ">
                <div className="hero-content flex-col">
                    <div className=" ">
                        <h1 className="text-5xl font-bold">Register </h1>
                    </div>

                    <div className="card flex-shrink-0 md:w-[600px]   justify-center items-center  ">
                        <form onSubmit={handelForm} className="card-body md:w-[500px]">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered  rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered  rounded-none" required />

                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered  rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" placeholder="imgUrl" name="imgUrl" className="file-input  input-bordered  rounded-none" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-orange-500 text-white  rounded-none">Register</button>
                            </div>
                            <div>
                                <h1> have Account <Link className="text-xl text-amber-600 font-bold" to="/login"> Login</Link></h1>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-500 text-center p-4">{registerError}</p>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;