import axios from 'axios';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditWork = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data);

    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const titles = form.titles.value;
        const descriptions = form.descriptions.value;
        const deadlines = form.deadlines.value;
        const priority = form.priority.value;
        const data = { titles, descriptions, deadlines, priority }
        const res = await axios.patch(`https://job-task-1-server-lovat.vercel.app/edit/${id}`, data)
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
            Swal.fire('Edit successful ')
            navigate('/dashboard')
        }



    }
    return (
        <div>

            <div className='flex justify-center items-center mt-4' >
                <div className="modal-box dark:bg-slate-700 dark:text-white">

                    <form onSubmit={handelForm} className="card-body w-80 md:w-[450px] ">
                        <h1 className="text-2xl font-bold  dark:text-amber-600 ">EditWork</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Titles</span>
                            </label>
                            <input defaultValue={data.titles} type="text" placeholder="Titles" name="titles" className="input  input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Descriptions</span>
                            </label>
                            <textarea defaultValue={data.descriptions} name="descriptions" id="" cols="30" rows="10" className="input input-bordered rounded-none" required></textarea>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Deadlines</span>
                            </label>
                            <input type="date" name="deadlines" defaultValue={data.deadlines} placeholder="deadlines" className="input input-bordered rounded-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Priority</span>
                            </label>
                            <select defaultValue={data.priority} name="priority" className="select select-bordered w-full  rounded-none  input dark:text-black">
                                <option disabled selected>Select Your Priority</option>
                                <option value='low'>Low</option>
                                <option value='moderate'>Moderate </option>
                                <option value='high'>High</option>


                            </select>
                        </div>

                        <div className="flex justify-center items-center gap-3">
                            <input className="input input-bordered rounded-none bg-amber-600 border-none w-full mt-6 text-white " type="submit" value="Edit " />

                        </div>

                    </form>



                </div>
            </div>
        </div>
    );
};

export default EditWork;