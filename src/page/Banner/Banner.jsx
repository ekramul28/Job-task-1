import { Link } from "react-router-dom";
import Button from "../../components/button/button";

const Banner = () => {
    return (
        <div className="md:flex justify-center items-center ">
            <div className="md:w-1/2 ">
                <h1 className="text-3xl font-bold">Manage work <br />
                    <span className="text-amber-600">Efficiently</span>.</h1>
                <h2 className="text-xl font-bold my-3">Plan, Track and Organise your work.</h2>
                <p>An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
                <Link to="/login">
                    <Button name={"Let’s Explore"}></Button>

                </Link>
            </div>
            <div className="md:w-1/2">
                <img src="https://i.ibb.co/XY0w9sc/her-micronet.jpg" alt="" />
            </div>

        </div >
    );
};

export default Banner;