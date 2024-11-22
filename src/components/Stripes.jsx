import React from 'react';


import Stripe from './Stripe';


function stripes() {


    const stripeData = [
        {
          url: "https://www.cssdesignawards.com/imgs/logo.svg",
          number: "48"
        },
        {
          url: "../assets/no.jpg",
          number: "2"
        },
        {
          url: "../assets/awards.png",
          number: "11"
        },
        {
          url: "https://www.cssdesignawards.com/imgs/logo.svg",
          number: "48"
        },
        {
          url: "../assets/no.jpg",
          number: "2"
        },
        {
          url: "../assets/awards.png",
          number: "11"
        },
      ]

  return (
    <div className='flex mt-24'>
      {stripeData.map((item, index) => (
        <Stripe key={index} item = {item} />
      ))}
    </div>
  )
}

export default stripes
