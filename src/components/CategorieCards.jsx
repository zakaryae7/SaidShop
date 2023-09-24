import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../assets/Data/categoriesData'

function CategorieCards() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Popular Categories</h1>
                </div>

                <div className="flex flex-wrap justify-center -m-4">
                    {
                        Data.map((card) => {
                            return (
                                <div className="p-4 md:w-1/3 w-full">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                        <img src={card.image} className='mb-5 rounded-md h-[200px] object-cover' />
                                        <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card.name}</h2>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">{card.description}</p>
                                            <Link to={`/categorie?id=${card.id}`} className="text-white hover:opacity-75 duration-300 flex items-center bg-main py-2 mt-5 rounded-lg px-4">
                                                <p>Discover Categorie</p>
                                                <div className='ml-auto'>
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CategorieCards;