import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Pricingfeature = ({feature}) => {
    return (
       <p className='flex gap-3 text-emerald-600'>
        <CircleCheckBig></CircleCheckBig>{feature}
        </p>
    );
};

export default Pricingfeature;