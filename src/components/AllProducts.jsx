'use client'
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const AllProducts = ({ products }) => {
    const [search, setSearch] = useState('');

    const filteredData = products.filter(product => {
        if(!search.trim()){
            return products;
        }

        const filterProduct = product.name.toLowerCase().includes(search.toLowerCase());
        return filterProduct
    })
    
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex justify-between pb-10'>
                <h2 className='text-xl font-bold '>All Product</h2>
                <input className='text-black border p-2 rounded' value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-8'>
                {
                    filteredData.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;