import { Link, useLoaderData } from "react-router-dom";
import { Element } from "react-scroll";

const AllWork = () => {
    const allWork = useLoaderData();
    console.log(allWork)
    return (
        <div>
            <Element className="element " id="scroll-container" style={{
                position: 'relative',
                height: '100vh',
                width: ('100%'),
                overflow: 'scroll',
                marginBottom: '100px'
            }}>
                <div className="grid grid-cols-3 gap-3">
                    {
                        allWork.map(work => <div key={work._id} className="card   bg-slate-100 dark:bg-slate-700 dark:text-white ml-3">
                            <div className="card-body items-center text-center">
                                <h1>Title:{work.titles}</h1>
                                <h1>Descriptions:{work.descriptions}</h1>
                                <h1>Deadlines:{work.deadlines}</h1>
                                <h1>Priority:{work.priority}</h1>
                                <Link to="/dashboard"><button className="btn my-3 bg-amber-600  rounded-none text-white border-none">Go dashboard</button></Link>
                            </div>
                        </div>)
                    }
                </div>

            </Element>

        </div>
    );
};

export default AllWork;