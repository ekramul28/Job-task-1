import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import imageUpload from "../../Api/image";

const Register = () => {
    const navigate = useNavigate()
    const [registerError, setRegisterError] = useState('');
    const { createUserWithEmail, updateUserProfile } = useAuth()
    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.imgUrl.files[0];


        setRegisterError('')
        if (password.length < 6) {
            return Swal.fire('Password must be at least 6 characters');

        } if (!/[A-Z]/.test(password)) {
            return Swal.fire('Password must be a Uppercase letter');

        }
        if (!/[a-z]/.test(password)) {
            return Swal.fire('Password must be a Lowercase letter');

        }
        if (!/[0-9]/.test(password)) {
            return Swal.fire('Password must be a number ')

        }

        try {
            const image = await imageUpload(photoURL)
            const result = await createUserWithEmail(email, password);
            await updateUserProfile(name, image?.data?.display_url)
            if (result?.user?.email) {
                form.reset();
                Swal.fire('register successful ')
                navigate("/")
            }

        } catch (error) {
            setRegisterError(error.message);
        }



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