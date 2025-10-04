import React from 'react';

const Links = ({route}) => {
    return (
        <li className='mr-10 px-4 hover:bg-amber-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Links;