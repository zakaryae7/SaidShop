import { Link } from "react-router-dom";

function Nopage() {
    return (
        <div className='text-center  py-20'>
            <h1 className='text-center text-x font-semibold text-3xl py-5'>Page Not found !</h1>
            <Link to={"/"}><button className='text-white bg-main duration-300 hover:-translate-y-2 text-semibold rounded-lg bg-x px-4 py-2'>Return to Home Page</button></Link>
        </div>
    )
}

export default Nopage;