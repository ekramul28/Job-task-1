import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Swal from "sweetalert2";
import AddWork from "../AddWork/AddWork";
const Dashboard = () => {
    const navigate = useNavigate()
    const { user, Logout } = useAuth();
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
    const handelLogOut = () => {
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
    }


    const handelAddWork = () => {
        document.getElementById('my_modal_5').showModal()
    }

    return (
        <div className="flex dark:bg-slate-800">
            <div className="w-1/5 bg-slate-100 shadow-2xl h-screen  dark:bg-slate-700 dark:text-white">
                <div className="text-3xl dark:text-white m-4">
                    {
                        theme === "dark" ? <CiDark onClick={handelClick}></CiDark> : <MdSunny onClick={handelClick}></MdSunny>
                    }
                </div>
                {user && <><div className="flex justify-center items-center">
                    <div className="">
                        <img className="w-10 h-10 md:w-24 md:h-24 mt-5 mx-1  rounded-full  " src={user?.photoURL} alt="" />
                    </div>
                </div>

                    <p className="text-xl font-bold mt-3 flex justify-center items-center">Hey,{user?.displayName}</p>

                </>
                }
                <div className="mt-10">
                    <li className="list-none font-semibold text-xl my-3 flex justify-center items-center"> <NavLink to="/dashboard" className='flex justify-center items-center gap-2 h-10 w-60  '><MdOutlineSpaceDashboard className="text-2xl font-bold "></MdOutlineSpaceDashboard> Dashboard</NavLink></li>
                    <li className="list-none font-semibold text-xl my-3  flex justify-center items-center"> <button onClick={handelAddWork} className='flex justify-center items-center gap-2 h-10 w-60 '><IoMdAdd className="text-2xl font-bold "></IoMdAdd> Add Work</button></li>

                    <AddWork></AddWork>
                </div>

                <div className="mt-48 flex justify-center ">
                    <button onClick={handelLogOut} className="btn border-none w-64 mr-2 bg-amber-600 text-white  flex justify-center items-center "><CiLogout className="text-white text-xl"></CiLogout> LogOut</button>
                </div>
            </div>
            <div className="w-4/5 dark:text-white">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;