import { Link } from "react-router-dom";
import Categorie from "../components/CategorieCards"
import Stats from '../components/HomeStats'
function Categories() {
    document.title = 'Categories | Digital Agency'

    return (
        <div>
            <Categorie />
            <Stats />
        </div>
    )
}

export default Categories;