import { Link } from "react-router-dom";
import Button from "../../components/button/button";

const Banner = () => {
    return (

        <div className="md:flex justify-center items-center max-w-7xl mx-auto pt-7 ">
            <div className="md:w-1/2 my-7 mx-3">
                <h1 className="text-3xl font-bold">Manage work <br />
                    <span className="text-amber-600 dark:text-sky-500">Efficiently</span>.</h1>
                <h2 className="text-xl font-bold my-3">Plan, Track and Organise your work.</h2>
                <p>An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
                <Link to="/login">
                    <Button name={"Let’s Explore"}></Button>

                </Link>
            </div>
            <div className="md:w-1/2 mt-7">
                <img src="https://i.ibb.co/C06G5Zs/her-micronet-removebg-preview.png" alt="" />
            </div>

        </div >

    );
};

export default Banner;