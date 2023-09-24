import heroImg from '../assets/heroImg.jpg'
import { Link } from "react-router-dom";

function HomeMain() {
    return (
        <div className="container mx-auto flex flex-col-reverse px-5 py-10 lg:py-20 md:flex-row md:justify-center items-center">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font text-3xl lg:text-6xl mb-4 font-medium text-gray-900">Welcome to the BEST
                    <br className="hidden lg:inline-block text-x" />Digital services Website.
                </h1>
                <p className="mb-8 leading-relaxed">Thank you for choosing <span className='text-main font-semibold'>Yassine Shop</span> as your destination for all things digital. We're excited to embark on this technological journey with you. Start exploring our digital wonderland today and elevate your digital lifestyle!</p>
                <div className="lg:flex-row flex flex-col justify-center gap-2 w-full lg:w-max lg:gap-5 ">
                    <Link to='/products' className="text-white bg-main border-0 py-2 px-4 focus:outline-none hover:bg-main rounded-lg">Show All Products</Link>
                    <Link to='/contact' className=" text-gray-700 bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-lg">Contact Us</Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="" alt="hero" src={heroImg} />
            </div>
        </div>
    )
}
export default HomeMain;