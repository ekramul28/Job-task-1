import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import Button from "../../components/button/button";
import Swal from "sweetalert2";
const Navbar = () => {
    const { user, Logout } = useAuth();
    const navigate = useNavigate()
    console.log(user)
    const link = <>
        <li className="font-medium text-lg dark:text-white" ><NavLink to="/">Home</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/blog">Blog</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/product">Product</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/dashboard">dashboard</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/card">Card</NavLink></li>
    </>
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        if (theme == "light") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");

        }
    }, [theme])

    const handelClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const handelSingOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, LogOut'
        }).then((result) => {
            if (result.isConfirmed) {
                Logout()
                    .then(result => {
                        navigate('/')
                        Swal.fire('Logout succesfull');

                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    };



    return (
        <div className=" bg-base-100 dark:bg-slate-800 bg-opacity-60 shadow-md z-50 sticky top-0 ">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start  ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden dark:text-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-800 border rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl dark:text-white">MANAGE</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="hidden md:block dark:text-white ">
                        {
                            user && <p className="font-semibold">{user?.displayName}</p>
                        }
                    </div>

                    {
                        user && <>

                            <details className="dropdown dropdown-bottom dropdown-end ">
                                <summary className="flex "><img className="w-10 h-10 md:w-14 md:h-14 mx-1  rounded-full" src={user?.photoURL} alt="" /></summary>
                                <div className="my-4 -mr-8 md:-mr-2 menu dropdown-content    ">
                                    <div className="dark:bg-slate-800 dark:text-white p-6 bg-slate-100 shadow-2xl rounded-box">
                                        <p className="flex justify-center text-xl">{user?.email}</p>
                                        <div className="flex justify-center items-center">
                                            <img className="w-10 h-10 md:w-24 md:h-24 mt-5 mx-1  rounded-full " src={user?.photoURL} alt="" />
                                        </div>
                                        <p className="flex justify-center text-2xl my-6">{user?.displayName}</p>
                                        <div className="flex justify-center items-center gap-3 mt-4 mb-2">
                                            <Link to="/dashboard/profile" className=" btn  rounded-none text-xl md:w-44 text-white dark:bg-sky-500 bg-amber-600 dark:text-white border-none "><CgProfile></CgProfile> Profile</Link>
                                            <button onClick={handelSingOut} className=" btn  rounded-none text-xl md:w-44 text-white dark:bg-sky-500 bg-amber-600 dark:text-white border-none "><FiLogOut></FiLogOut>Sign out</button>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </>

                    }
                    <div className="text-3xl dark:text-white">
                        {
                            theme === "dark" ? <CiDark onClick={handelClick}></CiDark> : <MdSunny onClick={handelClick}></MdSunny>
                        }
                    </div>
                    {
                        user ? "" : <Link to='/login'><Button name="Login"></Button></Link>
                    }


                </div>
            </div >

        </div >
    );
};

export default Navbar;