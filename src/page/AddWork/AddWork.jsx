import axios from "axios";
import Swal from "sweetalert2";

const AddWork = () => {
    const dialog = document.querySelector("dialog");
    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const titles = form.titles.value;
        const descriptions = form.descriptions.value;
        const deadlines = form.deadlines.value;
        const priority = form.priority.value;
        const value = { titles, descriptions, deadlines, priority, position: "to do" }
        console.log(value);
        const res = await axios.post('http://localhost:5000/work', value)
        console.log(res.data);
        if (res.data?.insertedId) {
            form.reset();
            dialog.close();
            Swal.fire('add successful ')


        }
    }
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box dark:bg-slate-700 dark:text-white">

                    <form onSubmit={handelForm} className="card-body w-80 md:w-[450px] ">
                        <h1 className="text-2xl font-bold  dark:text-amber-600 ">AddWork</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Titles</span>
                            </label>
                            <input type="text" placeholder="Titles" name="titles" className="input  input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Descriptions</span>
                            </label>
                            <textarea name="descriptions" id="" cols="30" rows="10" className="input input-bordered rounded-none" required></textarea>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Deadlines</span>
                            </label>
                            <input type="date" name="deadlines" placeholder="deadlines" className="input input-bordered rounded-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Priority</span>
                            </label>
                            <select name="priority" className="select select-bordered w-full  rounded-none  input dark:text-black">
                                <option disabled selected>Select Your Priority</option>
                                <option value='low'>Low</option>
                                <option value='moderate'>Moderate </option>
                                <option value='high'>High</option>


                            </select>
                        </div>

                        <div className="flex justify-center items-center gap-3">
                            <input className="input input-bordered rounded-none bg-amber-600 border-none w-full mt-6 text-white " type="submit" value="ADD " />
                            <div className="modal-action justify-center items-center">
                                <form method="dialog" >
                                    <button className="btn">close</button>
                                </form>
                            </div>
                        </div>

                    </form>



                </div>
            </dialog>
        </div>
    );
};

export default AddWork;