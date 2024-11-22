import React from 'react'
import Card from './Card'

function Cards() {

    const cardData = [
        {
            contact: "up next: Culture",
            aboutUs: "who we are",
            moto: "",
            motivation: "explore what drives our team",
            btn: ""
        },
        {
            contact: "get in touch",
            aboutUs: "let's get to it, together.",
            moto: "Start a project",
            motivation: "",
            btn: "contact us"
        },
    ]


  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-32 flex gap-1'>
        {cardData.map((item, index) => (
            <Card 
                key={index}
                item={item}
                index={index}
            />
        ))}
      </div>
    </div>
  )
}

export default Cards
