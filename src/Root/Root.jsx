import { Outlet } from "react-router-dom";
import Navbar from "../page/Header/Navbar";
import Footer from "../page/Footer/Footer";

const Root = () => {
    return (
        <div className="">
            <div >
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;