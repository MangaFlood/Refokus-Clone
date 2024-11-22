import React from 'react'

function stripe({item}) {

  return (
    <div className='w-[16.67vw] bg-zinc-100 flex justify-between items-center p-5 border-l-[1px] border-zinc-600'>
      <img src={item.url} alt="" />
      <h1 className='font-bold text-xl'>{item.number}</h1>
    </div>
  )
}

export default stripe
