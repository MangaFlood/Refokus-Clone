import React from 'react'

function Marquee({imgUrl}) {
  return (
    <div className='flex w-full py-5 whitespace-nowrap overflow-hidden gap-20'>
      {imgUrl.map((item, index) => (
        <img className='w-40' key={index} src={item} alt="" />
      ))}
      {imgUrl.map((item, index) => (
        <img className='w-40' key={index} src={item} alt="" />
      ))}
    </div>
  )
}

export default Marquee
