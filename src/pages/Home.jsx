import Main from '../components/HomeMain'
import Stats from '../components/HomeStats'
import Categories from '../components/CategorieCards'
import Data from '../assets/Data/productsData'
import ProductHome from "../components/HomeProduct";

function Home() {
    // Document Title 
    document.title = 'Home | Digital Agency'
    let value = Data[(Math.floor(Math.random() * Data.length))]
    return (
        <div>
            <Main />
            <Stats />
            <Categories />
            <h1 className="text-center text-main mb-20 mt-20 text-lg lg:text-3xl font-semibold">Our Popular Products :</h1>
            <ProductHome />
            <div>
                <h1 className="text-center text-main mb-20 mt-20 text-lg lg:text-3xl font-semibold">Why chosing Us?</h1>

            </div>
        </div>
    )
}

export default Home;