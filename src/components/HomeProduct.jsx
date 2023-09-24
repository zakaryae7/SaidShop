import Data from '../assets/Data/productsData'
import { Link } from "react-router-dom";

export default function ProductHome() {

    let randomIndex1 = Math.floor(Math.random() * Data.length);
    let randomIndex2 = Math.floor(Math.random() * Data.length);

    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * Data.length);
    }

    const randomElement1 = Data[randomIndex1];
    const randomElement2 = Data[randomIndex2];

    return (
        <div className="lg:flex gap-10 w-max mx-auto lg:w-auto justify-center lg:mx-10 lg:flex-row">
            <div
                className="border border-gray-200 rounded-lg w-[300px] h-[300px] text-center px-4 py-5 relative mb-20">
                <div className="h-10">
                    <img src={randomElement1.image} className="mx-auto absolute h-[60px] -top-7 right-1/2 translate-x-1/2" />
                </div>
                <h1 className="font-semibold text-xl h-[3.3rem]">{randomElement1.title}</h1>
                <p className="text-sm my-4 mx-auto">{randomElement1.description}</p>
                {randomElement1.price <= 0 &&
                    <div>
                        <p className="text-main font-medium text-xl">-</p>
                        <Link to={`/product?productid=${randomElement1.id}`}>
                            <button className="w-full bg-main hover:bg-transparent hover:text-main border border-main duration-300 text-white py-1.5 rounded-md mt-5">View Plans</button>
                        </Link>
                    </div>
                }
                {randomElement1.price > 0 &&
                    <div>
                        <p className="text-main font-medium text-xl">{randomElement1.price} Dhs</p>
                        <Link to={`/purshase?productid=${randomElement1.id}`}>
                            <button className="w-full bg-main hover:bg-transparent hover:text-main border border-main duration-300 text-white py-1.5 rounded-md mt-5">Buy Now</button>
                        </Link>
                    </div>
                }
            </div>
            <div
                className="border border-gray-200 rounded-lg w-[300px] h-[300px] text-center px-4 py-5 relative mb-20">
                <div className="h-10">
                    <img src={randomElement2.image} className="mx-auto absolute h-[60px] -top-7 right-1/2 translate-x-1/2" />
                </div>
                <h1 className="font-semibold text-xl h-[3.3rem]">{randomElement2.title}</h1>
                <p className="text-sm my-4 mx-auto">{randomElement2.description}</p>
                {randomElement2.price <= 0 &&
                    <div>
                        <p className="text-main font-medium text-xl">-</p>
                        <Link to={`/product?productid=${randomElement2.id}`}>
                            <button className="w-full bg-main hover:bg-transparent hover:text-main border border-main duration-300 text-white py-1.5 rounded-md mt-5">View Plans</button>
                        </Link>
                    </div>
                }
                {randomElement2.price > 0 &&
                    <div>
                        <p className="text-main font-medium text-xl">{randomElement2.price} Dhs</p>
                        <Link to={`/purshase?productid=${randomElement2.id}`}>
                            <button className="w-full bg-main hover:bg-transparent hover:text-main border border-main duration-300 text-white py-1.5 rounded-md mt-5">Buy Now</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}