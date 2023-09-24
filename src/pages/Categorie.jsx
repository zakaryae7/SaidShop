import { Link } from "react-router-dom";
import Data from '../assets/Data/productsData';
import CatData from '../assets/Data/categoriesData'

function Categories() {

    // GET Category Name and Id
    let CategorieId = String(window.location.search.split("?id=")).replace(/,/gi, ""); // Name
    let CategorieName = CatData.filter((items) => items.id == CategorieId)[0]

    // Document Title Dynamic by Category Name
    document.title = 'Home | ' + CategorieName.name

    return (
        <div>
            <h1 className="font-semibold text-main text-2xl lg:text-4xl text-center mt-20">{CategorieName.name}</h1>
            <p className="text-center mt-3 text-xl">- Our Products -</p>
            <div className="flex flex-wrap gap-10 mx-10 lg:mx-20 mt-40 justify-center select-none ">
                {Data.map(value => {
                    if (CategorieId == value.categoriesRef) {
                        {
                            return (
                                <div
                                    key={value.id}
                                    className="border border-gray-200 rounded-lg w-[300px] text-center px-4 py-5 relative mb-20">
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
                            )
                        }
                    }
                })}
            </div>
        </div >
    )
}

export default Categories;