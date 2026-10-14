import { getCategories } from '@/services/dataFetch';
import React from 'react';
import NavbButton from './NavbButton';
import Link from 'next/link';
import NavLInk from './NavLInk';

const Navbar = async () => {
  const categories = getCategories();
  // console.log(categories);



  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lex items-center gap-4 cursor-pointer">
        
       <Link href={`/profile`}>
        <li>Profile</li>
      </Link>

       {
        categories.map(c => <Link key={c._id} href={`/category/${c.slug}`}> <NavLInk categories={c} ></NavLInk></Link>)
      }

      </ul>
    </div>
    <Link href="/">
      <h3 className='text-2xl font-bold'>
         home
      </h3>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center gap-4 cursor-pointer">
     
      {
        categories.map(c => <Link key={c._id} href={`/category/${c.slug}`}> <NavLInk categories={c} ></NavLInk></Link>)
      }
      <Link href={`/profile`}>
        <li>Profile</li>
      </Link>
    </ul>
  </div>
  <div className="navbar-end">
    <NavbButton/>
  </div>
</div>
  );
};

export default Navbar;