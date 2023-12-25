import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Element } from "react-scroll";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const DashboardHome = () => {



    const { refetch, data: todoWork = [] } = useQuery({
        queryKey: ["todoWork"],
        queryFn: async () => {
            const res = await axios('https://job-task-1-server-lovat.vercel.app/todo')

            return res.data;
        }

    });
    refetch()
    const { refetch: update, data: ongoing = [] } = useQuery({
        queryKey: ["ongoing"],
        queryFn: async () => {
            const res = await axios('https://job-task-1-server-lovat.vercel.app/ongoing')

            return res.data;
        }

    });
    const { refetch: completedRefetch, data: completed = [] } = useQuery({
        queryKey: ["completed"],
        queryFn: async () => {
            const res = await axios('https://job-task-1-server-lovat.vercel.app/completed')
            return res.data;
        }

    });



    const handelDelete = async (id) => {

        const res = await axios.delete(`https://job-task-1-server-lovat.vercel.app/delete/${id}`)
        console.log(res.data);
        if (res.data.deletedCount > 0) {
            Swal.fire('Delete successful ')
            refetch();
            update();
            completedRefetch();
        }

    }
    refetch()


    const handelDrageStart = (e, id,) => {
        e.dataTransfer.setData('todoId', id)
    }
    const handelDragOver = (e) => {
        e.preventDefault();
    }
    const handelDrop = async (e, name) => {
        console.log('drop')
        let getData = e.dataTransfer.getData('todoId');
        console.log(getData);
        const res = await axios.patch(`https://job-task-1-server-lovat.vercel.app/work/${getData}`, name)
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
            refetch();
            update();
            completedRefetch();
        }


    }


    return (
        <div className="md:flex " >
            <div className="md:w-1/3 text-center border border-black h-screen" onDragOver={(e) => handelDragOver(e)} onDrop={(e) => handelDrop(e, { name: 'to do' })}>
                <h1>TO DO LIST</h1>
                <Element className="element" id="scroll-container" style={{
                    position: 'relative',
                    height: '100vh',
                    overflow: 'scroll',
                    marginBottom: '100px'
                }}>


                    {
                        todoWork.map(work => <div draggable onDragStart={(e) => handelDrageStart(e, work._id,)} key={work._id} className="   bg-slate-100 dark:bg-slate-700 dark:text-white ml-3">
                            <div className=" items-center text-center my-5">
                                <h1>Title:{work.titles}</h1>
                                <h1>Descriptions:{work.descriptions}</h1>
                                <h1>Deadlines:{work.deadlines}</h1>
                                <h1>Priority:{work.priority}</h1>
                                <Link to={`/dashboard/edit/${work._id}`}>
                                    <button className="btn my-3 mr-3 bg-amber-600  rounded-none text-white border-none">Edit</button>
                                </Link>
                                <button onClick={() => handelDelete(work._id)} className="btn my-3 bg-amber-600  rounded-none text-white border-none">Delete</button>

                            </div>
                        </div>)
                    }


                </Element>





            </div>
            <div onDragOver={(e) => handelDragOver(e)} onDrop={(e) => handelDrop(e, { name: 'ongoing' })} className="md:w-1/3 text-center border border-black h-screen">
                <h1>ONGOING LIST</h1>
                <Element className="element" id="scroll-container" style={{
                    position: 'relative',
                    height: '100vh',
                    overflow: 'scroll',
                    marginBottom: '100px'
                }}>
                    {
                        ongoing.map(work => <div draggable onDragStart={(e) => handelDrageStart(e, work._id,)} key={work._id} className="   bg-slate-100 dark:bg-slate-700 dark:text-white ml-3">
                            <div className=" items-center text-center my-5">
                                <h1>Title:{work.titles}</h1>
                                <h1>Descriptions:{work.descriptions}</h1>
                                <h1>Deadlines:{work.deadlines}</h1>
                                <h1>Priority:{work.priority}</h1>
                                <Link to={`/dashboard/edit/${work._id}`}>
                                    <button className="btn my-3 mr-3 bg-amber-600  rounded-none text-white border-none">Edit</button>
                                </Link>                                <button onClick={() => handelDelete(work._id)} className="btn my-3 bg-amber-600  rounded-none text-white border-none">Delete</button>

                            </div>
                        </div>)
                    }
                </Element>

            </div>
            <div className="md:w-1/3 text-center border border-black h-screen" onDragOver={(e) => handelDragOver(e)} onDrop={(e) => handelDrop(e, { name: 'completed' })}>
                <h1>COMPLETED LIST</h1>
                <Element className="element" id="scroll-container" style={{
                    position: 'relative',
                    height: '100vh',
                    overflow: 'scroll',
                    marginBottom: '100px'
                }}>
                    {
                        completed.map(work => <div draggable onDragStart={(e) => handelDrageStart(e, work._id)} key={work._id} className="   bg-slate-100 dark:bg-slate-700 dark:text-white ml-3">
                            <div className=" items-center text-center my-5">
                                <h1>Title:{work.titles}</h1>
                                <h1>Descriptions:{work.descriptions}</h1>
                                <h1>Deadlines:{work.deadlines}</h1>
                                <h1>Priority:{work.priority}</h1>
                                <Link to={`/dashboard/edit/${work._id}`}>
                                    <button className="btn my-3 mr-3 bg-amber-600  rounded-none text-white border-none">Edit</button>
                                </Link>
                                <button onClick={() => handelDelete(work._id)} className="btn my-3 bg-amber-600  rounded-none text-white border-none">Delete</button>

                            </div>
                        </div>)
                    }
                </Element>

            </div>
        </div>
    );
};

export default DashboardHome;