import React, { useState } from 'react';
import Links from './links';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Blog", url: "/blog" },
  { id: 5, name: "Contact", url: "/contact" },
];


const NavBar = () => {

  const [open,setOpen]=useState(false);
  const links=  navLinks.map(route=><Links key={route.id} route={route}></Links>)

    return (
        <nav className='flex justify-between m-4'>
           
           <span className='flex' onClick={()=>setOpen(!open)}>
            {
              open? 
              <X className='md:hidden'></X>:
              <Menu className='md:hidden'></Menu>
            }
            <ul className={`md:hidden  absolute duration-1000
            ${open? 'top-10':'-top-40'}
            bg-amber-200
              
              
              `}>
              {links}
            </ul>
            
            <h3 className='ml-4'>My Navbar</h3>
            </span> 
            <ul className='md:flex hidden'>
                {
               links
          }
        </ul>
        <button>Sign In</button>
        </nav>
    );
};

export default NavBar;