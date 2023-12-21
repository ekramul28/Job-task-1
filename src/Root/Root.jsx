import { Outlet } from "react-router-dom";
import Navbar from "../page/Header/Navbar";
import Footer from "../page/Footer/Footer";

const Root = () => {
    return (
        <div className="">
            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;