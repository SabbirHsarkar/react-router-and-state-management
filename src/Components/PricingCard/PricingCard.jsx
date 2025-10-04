import React from 'react';
import Pricingfeature from './Pricingfeature';

const PricingCard = ({pricing}) => {

    const {name,price,description,features}=pricing;
    return (
        <div className='border-2 rounded-2xl bg-blue-200 p-4'>
            {/* Card Hearder */}
            <div>
                <h3 className='text-5xl'>{name}</h3>
                <h2 className='text-3xl'>{price}</h2>
            </div>
            {/* Card Body */}
            <div>
                <p>{description}</p>

                {
                    features.map((feature,index) =>
                  <Pricingfeature key={index} feature={feature}></Pricingfeature>)
                }
            </div>
            <button className="btn w-full bg-amber-500 mt-10 rounded-3xl">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;