import { useForm, ValidationError } from '@formspree/react';
import ProductsData from '../assets/Data/productsData'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";

function Purshase() {

    // Form Values Change Handle
    let [Price, setPrice] = useState('');
    const handleChange = (event) => {
        setPrice(event.target.value);
    }

    // Category + Product Name
    let Title = String(location.pathname.split("/purshase/")).replace(/\/|,|id|%|[0-9]|\+|=|&|prodid|catid=/gi, ' ');
    // Product Name
    let ProdTitle = Title.split('-')[1]

    // FormSpree Form Success return
    const [state, handleSubmit] = useForm("xvojwraw");
    if (state.succeeded) {
        return (
            <div className='flex flex-col justify-center mt-20 rounded-md p-5 items-center mx-auto border border-main w-max'>
                <p className='text-center text-main  text-2xl lg:text-4xl w-max'>Thanks for Chosing DIGITAL AGENCY, Your order will be done in few minutes</p>
                <Link to={"/"}><button className='text-white bg-main duration-300 mt-5 hover:-translate-y-2 text-semibold rounded-lg bg-x px-4 py-2 mx-auto w-max'>Return to Home Page</button></Link>
            </div>
        )
    }

    // Get Product & Category Ids
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Numb = urlParams.get('prodid') // product+category Variable

    // Styles
    let inputstyle = 'outline-none border border-gray-200 rounded-md py-1.5 px-4'
    let labelstyle = 'flex flex-col gap-2  justify-center text-start'

    // Document Title Dynamic by Product Name
    document.title = 'Home | ' + ProdTitle

    return (
        <div>
            {ProductsData.map(val => {
                if (String(val.id) == Numb) {
                    return (
                        <div className=''>
                            <h1 className="font-semibold text-main text-2xl lg:text-4xl text-center mt-10 lg:mt-20">{Title}</h1>
                            {val.price <= 0 &&
                                <div className='flex justify-between flex-col lg:flex-row items-start border border-main rounded-lg mx-5 lg:mx-20 mt-10 lg:mt-20'>
                                    {/* DIV 1 */}
                                    <div className='flex flex-col gap-5 w-full text-center lg:w-1/2 py-5 px-7 lg:py-10 lg:px-20'>
                                        <img src={val.image} className='h-20 lg:h-[7rem] lg:my-5 w-max mx-auto' />
                                        <h1 className='text-main font-semibold text-xl '>Please select a plan :</h1>
                                        <select className='lg:w-1/3 mx-auto w-full my-5 -mt-1 lg:mx-auto border border-main rounded-md py-1 px-3 outline-none' onChange={handleChange} value={Price}>
                                            <option hidden defaultValue >Select an amount</option>
                                            {val.prices.map(val2 => {
                                                return (
                                                    <option className=' text-lg' value={val2.priceFollowers}>{val2.followers}</option>
                                                )
                                            })}
                                        </select>
                                        {Price > 0 &&
                                            <span className="text-main font-medium text-xl duration-300">Price : {Price} Dhs</span>
                                        }
                                    </div>

                                    <div className='border-t border-main py-5 px-5 text-center md:mx-auto md:w-full lg:mx-0 lg:text-start'>
                                        <h1 className="font-semibold text-main text-xl lg:text-2xl mb-5 ">Please fill in this form to complete your order:</h1>
                                        <form onSubmit={handleSubmit} className='flex flex-col gap-4  md:w-3/4 md:mx-auto'>
                                            <label className={labelstyle}>
                                                Email Address :
                                                <input
                                                    name='email'
                                                    type="email"
                                                    className={inputstyle}
                                                    placeholder='example@gmail.com'
                                                />
                                            </label>
                                            {String(val.linkfeature) === "true" &&
                                                <label className={labelstyle}>
                                                    Link :
                                                    <input
                                                        name='link'
                                                        type="link"
                                                        className={inputstyle}
                                                        placeholder='https://'
                                                    />
                                                </label>
                                            }
                                            <label className={labelstyle}>
                                                Phone Number :
                                                <input
                                                    name='phone'
                                                    type="phone"
                                                    className={inputstyle}
                                                    placeholder='+xxx xxxxxxxx'
                                                />
                                            </label>
                                            <input
                                                hidden
                                                name='ServiceBought'
                                                type='text'
                                                value={val.title}
                                                className={inputstyle}
                                            />
                                            <input
                                                hidden
                                                name='TotalPrice'
                                                type='text'
                                                onChange={handleChange}
                                                value={Price + " Dhs"}
                                                className={inputstyle}
                                            />
                                            <button type="submit" className='bg-main text-white rounded-md w-full lg:w-max px-8 ml-auto md:py-2 duration-300 hover:opacity-75 py-1'>Submit</button>
                                        </form>
                                        <div className='mt-10 md:w-3/4 md:mx-auto'>
                                            <PayPalButton
                                                options={{
                                                    clientId: "AbkmsuwRdjZeqlMlBb7mfL_O-AQFXtJnenJjYImwSoqQ6w4MLexLAFib8CrgNdVfpzi49zrHW_2hollC",
                                                    currency: "USD",

                                                }}
                                                amount={Price * 0.097}
                                                onSuccess={(details, data) => {
                                                    // alert("Transaction completed by " + details.payer.name.given_name);
                                                    // console.log({ details, data });
                                                    return (
                                                        <div>
                                                            <h1>Payment went on succefully You will recieve infos about product bought in you entred gmail!</h1>
                                                            <h1>Any troubles? <span>Contact Us !</span></h1>
                                                        </div>
                                                    )
                                                }} />
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                val.price > 0 &&
                                <div>
                                    <p className="text-main font-medium text-xl" id='Pricee'>Price : {val.price} Dhs</p>
                                    <form onSubmit={handleSubmit} className='w-3/4 border border-main px-3 py-5 rounded-lg mx-auto lg:w-1/3 flex flex-col gap-4'>
                                        <label className={labelstyle}>
                                            Email Address :
                                            <input
                                                name='email'
                                                type="email"
                                                className={inputstyle}
                                                placeholder='example@gmail.com'
                                            />
                                        </label>
                                        {String(val.linkfeature) === "true" &&
                                            <label className={labelstyle}>
                                                Link :
                                                <input
                                                    name='link'
                                                    type="link"
                                                    className={inputstyle}
                                                    placeholder='https://'
                                                />
                                            </label>
                                        }
                                        <label className={labelstyle}>
                                            Phone Number :
                                            <input
                                                name='phone'
                                                type="phone"
                                                className={inputstyle}
                                                placeholder='+xxx xxxxxxxx'
                                            />
                                        </label>
                                        <input
                                            hidden
                                            name='ServiceBought'
                                            type='text'
                                            value={val.title}
                                            className={inputstyle}
                                        />
                                        <input
                                            hidden
                                            name='TotalPrice'
                                            type='text'
                                            onChange={handleChange}
                                            value={val.price + " Dhs"}
                                            className={inputstyle}
                                        />
                                        <button type="submit" className='bg-main -mt-2 text-white rounded-md w-full lg:w-max px-8 ml-auto duration-300 hover:opacity-75 py-1'>Submit</button>
                                    </form>
                                </div>
                            }
                        </div>

                    )

                }

            }
            )}
        </div>
    )
}

export default Purshase;