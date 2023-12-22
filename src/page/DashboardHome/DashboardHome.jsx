import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DashboardHome = () => {
    const { data: todoWork = [] } = useQuery({
        queryKey: ["todoWork"],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/todo')
            return res.data;
        }

    });
    const { refetch, data: ongoing = [] } = useQuery({
        queryKey: ["ongoing"],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/ongoing')
            return res.data;
        }

    });
    const { data: completed = [] } = useQuery({
        queryKey: ["completed"],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/completed')
            return res.data;
        }

    });

    const handelTodoWork = async (id) => {

        const res = await axios.patch(`http://localhost:5000/work/${id}`)

        refetch();
    }
    const handelOnGO = async (id) => {
        const res = await axios.patch(`http://localhost:5000/work/com/${id}`)
        refetch();
    }

    return (
        <div className="flex ">
            <div className="w-1/3 text-center border border-black h-screen">
                <h1>TO DO LIST</h1>
                {
                    todoWork.map(work => <div key={work._id} className="   bg-slate-100 dark:bg-slate-700 dark:text-white ml-3">
                        <div className=" items-center text-center my-5">
                            <h1>Title:{work.titles}</h1>
                            <h1>Descriptions:{work.descriptions}</h1>
                            <h1>Deadlines:{work.deadlines}</h1>
                            <h1>Priority:{work.priority}</h1>
                            <button onClick={() => handelTodoWork(work._id)} className="btn my-3 bg-amber-600  rounded-none text-white border-none">Make Ongoing</button>
                        </div>
                    </div>)
                }
            </div>
            <div className="w-1/3 text-center border border-black h-screen">
                <h1>ONGOING LIST</h1>
                {
                    ongoing.map(work => <div key={work._id} className="   bg-slate-100 dark:bg-slate-700 dark:text-white ml-3">
                        <div className=" items-center text-center my-5">
                            <h1>Title:{work.titles}</h1>
                            <h1>Descriptions:{work.descriptions}</h1>
                            <h1>Deadlines:{work.deadlines}</h1>
                            <h1>Priority:{work.priority}</h1>
                            <button onClick={() => handelOnGO(work._id)} className="btn my-3 bg-amber-600  rounded-none text-white border-none">Make completed</button>
                        </div>
                    </div>)
                }
            </div>
            <div className="w-1/3 text-center border border-black h-screen">
                <h1>COMPLETED LIST</h1>
                {
                    completed.map(work => <div key={work._id} className="   bg-slate-100 dark:bg-slate-700 dark:text-white ml-3">
                        <div className=" items-center text-center my-5">
                            <h1>Title:{work.titles}</h1>
                            <h1>Descriptions:{work.descriptions}</h1>
                            <h1>Deadlines:{work.deadlines}</h1>
                            <h1>Priority:{work.priority}</h1>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DashboardHome;