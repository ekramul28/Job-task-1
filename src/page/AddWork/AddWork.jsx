
const AddWork = () => {
    const handelForm = () => {

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
                            <input type="text" name="descriptions" placeholder="descriptions" className="input input-bordered rounded-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Deadlines</span>
                            </label>
                            <input type="text" name="deadlines" placeholder="deadlines" className="input input-bordered rounded-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Priority</span>
                            </label>
                            <select name="priority" className="select select-bordered w-full  input dark:text-black">
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