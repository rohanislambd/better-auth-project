'use client'
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const AllProducts = ({ products }) => {
    
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-xl font-bold pb-3'>All Product</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-8'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;