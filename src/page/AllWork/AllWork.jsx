import { useLoaderData } from "react-router-dom";

const AllWork = () => {
    const allWork = useLoaderData();
    console.log(allWork)
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                allWork.map(work => <div key={work._id} className="card   bg-slate-100 dark:bg-slate-700 dark:text-white ml-3">
                    <div className="card-body items-center text-center">
                        <h1>{work.title}</h1>
                        <h1>{work.descriptions}</h1>
                        <h1>{work.deadlines}</h1>
                        <h1>{work.priority}</h1>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllWork;