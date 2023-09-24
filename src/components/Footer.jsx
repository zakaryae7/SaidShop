import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="text-gray-600 body-font border-t-2 mt-20">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link to={"/"}><h1 className='text-2xl text-main z-50 font-bold mb-5'>Said<span className='text-2xl  font-semibold text-black'>Shop</span></h1></Link>
                    <p className="mt-2 text-sm text-gray-500">Best Digital Products Store for his resonable prices.</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={"/categories/Digital+Courses&id=1"} className="text-gray-600  hover:text-main duration-300">Digital Courses</Link>
                            </li>
                            <li>
                                <Link to={"/categories/Social+Media+Followers&id=2"} className="text-gray-600  hover:text-main duration-300">Social Media Followers</Link>
                            </li>
                            <li>
                                <Link to={"/categories/Channels+Activition&id=3"} className="text-gray-600  hover:text-main duration-300">Plateforms Accounts</Link>
                            </li>
                            <li>
                                <Link to={"/categories/Music+&+Movies+Steaming&id=4"} className="text-gray-600  hover:text-main duration-300">Music & Movies Steaming</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POPULAR PRODUCTS</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={"/purshase/+Digital+Courses++++-Marketing+Strategies?prodid=14"} className="text-gray-600  hover:text-main duration-300">Marketing Stratigies</Link>
                            </li>
                            <li>
                                <Link to={"/purshase/+Social+Media+Followers++++-Instagram+Followers?prodid=21"} className="text-gray-600  hover:text-main duration-300">Instagram Followers</Link>
                            </li>
                            <li>
                                <Link to={"/purshase/+Social+Media+Followers++++-Instagram+Accounts?prodid=22"} className="text-gray-600  hover:text-main duration-300">Instagram Accounts</Link>
                            </li>
                            <li>
                                <Link to={"/purshase/+Channels+Activition++++-Discord+Nitro+Classic?prodid=33"} className="text-gray-600  hover:text-main duration-300">Discord Nitro Classic</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUICK LINKS </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={"/contact"} className="text-gray-600  hover:text-main duration-300">Contact Us</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className="text-gray-600  hover:text-main duration-300">About Us</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Made By -
                        <Link to={""} className="text-gray-600 ml-1" target="_blank">Ennaciri Zakaryae</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link to={"https://www.facebook.com/profile.php?id=100093021170984"} target='_blank' className="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link to={"https://www.instagram.com/bigdreams188/"} target='_blank' className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;