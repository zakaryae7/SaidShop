import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const hide = () => {
        let hideIcon = document.getElementById('hide');
        hideIcon.classList.add('hidee')
    }
    const Menu = () => {
        let menuContent = document.getElementById("menuContent")
        menuContent.classList.toggle('menuContent')
    }

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className=' bg-red-600'>
                    <h1 className='text-white py-2 text-lg lg:text-xl animate-spin-slow'>LIMITED TIME DISCOUNT -- PROMOTION A DURÉE LIMITÉE -- تخفيضات مؤقتة</h1>
                </div>
                <div className='bg-emerald-500 flex justify-between px-5 items-center z-20' id='hide'>
                    <button></button>
                    <h1 className='  text-white py-2 font-semibold text-center'>Contact Us at <Link className='underline ml-auto' to={"https://api.whatsapp.com/send/?phone=%2B212642246010&text&type=phone_number&app_absent=0"}>Whatsapp</Link></h1>
                    <h1 className='font-bold cursor-pointer text-white' onClick={hide}>x</h1>
                </div>

                <div className='p-5 lg:px-10 flex items-center justify-between '>
                    <Link to={"/"}><h1 className='text-2xl text-main z-50 font-bold'>Said<span className='text-2xl font-semibold text-black'>Shop</span></h1></Link>

                    {/* Large device Navbar */}
                    <div className=' gap-6 items-center hidden lg:flex'>
                        <ul className='flex gap-6 items-center'>
                            <Link to={"/contact"} className='hover:opacity-75 duration-300'><li>Contact</li></Link>
                            <Link to={"/about"} className='hover:opacity-75 duration-300'><li>About Us</li></Link>
                        </ul>
                        <Link to={'/categories'} className="inline-flex justify-center items-center gap-2 text-white bg-main border-0 py-2 px-4 focus:outline-none hover:opacity-80 duration-300 rounded text-base mt-4 md:mt-0">
                            Categories
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>


                    {/* Mobile  Navbar */}
                    <div className='lg:hidden z-20' onClick={Menu}>
                        <svg width="18" height="18" viewBox="0 0 18 18">
                            <polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12"></polyline>
                            <polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5"></polyline>
                        </svg>
                    </div>
                    <div className='w-full absolute lg:hidden top-10 right-0 overflow-hidden z-10 -translate-y-[400px] duration-500 border-b border-gray-700' id='menuContent'>
                        <ul className='text-center text-lg pt-20 pb-10 bg-white px-5 flex flex-col gap-3'>
                            <Link to={"/contact"}><li>Contact</li></Link>
                            <Link to={"/about"}><li>About Us</li></Link>
                            <Link to={'/categories'} className="inline-flex justify-center items-center gap-2 text-white bg-main border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
                                Categories
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </ul>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Navbar;