
const Button = ({ name }) => {
    return (
        <div>
            <button className="btn my-3 bg-amber-600 dark:bg-sky-500 rounded-none text-white border-none">{name}</button>
        </div>
    );
};

export default Button;