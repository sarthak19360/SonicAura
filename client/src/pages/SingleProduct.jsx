import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import products from '../../data'
import Navbar from '../components/Navbar'

const SingleProduct = () => {
    const id = useLocation().state;
    const items = products.filter((product) => {
        return product.id === id
    })
    const item = items[0];
    return (
        <>
            <Navbar />
            <div className="mx-auto flex items-center" style={{ width: '80vw', height: '90vh', justifyContent: 'center' }}>
                <div>
                    <img src={item.img} alt="" />
                </div>
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{item.name}</h1>
                    <br />
                    <p className='tracking-tight text-gray-900'>{item.desc}</p>
                    <br />
                    <p className="text-3xl tracking-tight text-gray-900">{item.price}</p>
                    <br />
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default SingleProduct