import { Outlet } from "react-router-dom";
import Navbar from "../page/Header/Navbar";
import Footer from "../page/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;