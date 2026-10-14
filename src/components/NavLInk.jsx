
"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
const pathname = usePathname;

const NavLInk = ({categories}) => {
    console.log(categories);
    return (
        <div className={`flex gap-1`}>
            <span>{categories.icon}</span> 
            <li>{categories.name}</li>
            
        </div>
    );
};

export default NavLInk;