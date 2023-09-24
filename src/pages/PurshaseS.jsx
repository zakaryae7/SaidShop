import Data from '../assets/Data/productsData';
import { Link } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";
import { useForm, ValidationError } from '@formspree/react';
import CatData from '../assets/Data/categoriesData'


export default function Purshase() {

    let ProductId = String(window.location.search.split("?productid=")).replace(/,/gi, "");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const PlanId = urlParams.get('planid')
    let x = ProductId[0] + ProductId[1]
    let ProductData = Data.filter((items) => items.id == x)[0]
    let CategorieName = CatData.filter((items) => items.id == ProductId[0])[0]


    document.title = 'Home | ' + ProductData.title + ' Purshase'
    if (PlanId == null) {
        return (
            <div>
                <h1 className="font-semibold text-main text-3xl lg:text-5xl mx-5 text-center mt-20">{CategorieName.name + ' - ' + ProductData.title}</h1>
                <img src={ProductData.image} className='h-20 mx-auto my-5' />
                <h1 className='text-center text-xl text-main'>{"Price : " + ProductData.price + " Dhs"}</h1>
            </div>
        )
    } else {
        let PlanData = ProductData.prices.filter((items) => items.id == PlanId)[0]
        return (
            <div>
                <h1 className="font-semibold text-main text-3xl lg:text-5xl text-center mt-20">{ProductData.title + ' - ' + PlanData.followers}</h1>
                <img src={ProductData.image} className='h-20 mx-auto my-5' />
                <h1 className='text-center text-xl text-main'>{"Price : " + PlanData.priceFollowers + " Dhs"}</h1>
            </div>
        )
    }
}