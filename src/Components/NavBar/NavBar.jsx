import React from 'react';
import Links from './links';

const navLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Blog", url: "/blog" },
  { id: 5, name: "Contact", url: "/contact" },
];


const NavBar = () => {
    return (
        <nav>
            <ul className='flex'>
                {
   navLinks.map(route=><Links key={route.id} route={route}></Links>)
          }
        </ul>
        </nav>
    );
};

export default NavBar;