import { Link } from "react-router-dom";
import Data from '../assets/Data/productsData';

function Products() {

    // Get Product Id

    // Document Title Dynamic by Category Name
    document.title = 'Home | Products'

    return (
        <div>
            <p className="text-center text-3xl text-main font-semibold mt-10">- Our Products -</p>
            <div className="flex flex-wrap gap-10 mx-10 lg:mx-20 justify-center select-none mt-40">
                {Data.map(value => {
                    return (
                        <div>
                            <div
                                key={value.id}
                                className="border border-gray-200 rounded-lg w-[300px] h-[300px] text-center px-4 py-5 relative mb-20">
                                <div className="h-10">
                                    <img src={value.image} className="mx-auto absolute h-[60px] -top-7 right-1/2 translate-x-1/2" />
                                </div>
                                <h1 className="font-semibold text-xl h-[3.3rem]">{value.title}</h1>
                                <p className="text-sm my-4 mx-auto">{value.description}</p>
                                {value.price <= 0 &&
                                    <div>
                                        <p className="text-main font-medium text-xl">-</p>
                                        <Link to={`/product?productid=${value.id}`}>
                                            <button className="w-full bg-main hover:bg-transparent hover:text-main border border-main duration-300 text-white py-1.5 rounded-md mt-5">View Plans</button>
                                        </Link>
                                    </div>
                                }
                                {value.price > 0 &&
                                    <div>
                                        <p className="text-main font-medium text-xl">{value.price} Dhs</p>
                                        <Link to={`/purshase?productid=${value.id}`}>
                                            <button className="w-full bg-main hover:bg-transparent hover:text-main border border-main duration-300 text-white py-1.5 rounded-md mt-5">Buy Now</button>
                                        </Link>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Products;