import { Link } from "react-router-dom";
import Data from '../assets/Data/productsData';

function Product() {

    // Get Product Id
    let ProductId = String(window.location.search.split("?productid=")).replace(/,/gi, "");
    let ProductData = Data.filter((items) => items.id == ProductId)[0]
    // Document Title Dynamic by Category Name
    document.title = 'Home | ' + ProductData.title + ' Packages'

    return (
        <div>
            <h1 className="font-semibold text-main text-3xl lg:text-5xl text-center mt-20">{ProductData.title}</h1>
            <p className="text-center mt-3 text-xl">- Our Packages -</p>
            <div className="flex flex-wrap gap-10 mx-10 lg:mx-20 justify-center select-none ">
                {Data.map(value => {
                    if (ProductId == value.id) {
                        return (
                            <div className="flex flex-wrap gap-10  lg:mx-20 mt-40 justify-center select-none ">
                                {value.prices.map(val => {
                                    return (
                                        <div>
                                            <div
                                                key={val.key}
                                                className="border border-gray-200 rounded-lg w-[300px] text-center px-4 py-5 relative mb-20 shadow">
                                                <div className="h-10">
                                                    <img src={value.image} className="mx-auto absolute h-[80px] -top-9 right-1/2 translate-x-1/2 bg-black p-2.5 rounded-full" />
                                                </div>
                                                <h1 className="font-semibold text-2xl h-[3.3rem] mb-5">{value.title + ' ' + val.followers}</h1>
                                                {value.caracters.map(valuex => {
                                                    return (
                                                        <ul className="text-xl my-2" >
                                                            <li>{valuex}</li>
                                                        </ul>
                                                    )
                                                })}
                                                <p className="text-main font-medium text-2xl mt-10">{val.priceFollowers} Dhs</p>
                                                <Link to={`/purshase?productid=${value.id}&planid=${String(val.id)}`}>
                                                    <button className="w-full bg-main hover:bg-transparent hover:text-main border border-main duration-300 text-white py-1.5 rounded-md mt-5">Buy it Now</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                })}
            </div>
        </div >
    )
}

export default Product;