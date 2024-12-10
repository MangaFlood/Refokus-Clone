import { motion } from 'motion/react'

import React from 'react'

function Marquee({imgUrl, id}) {
  motion
  return (
    <div className='overflow-hidden flex'>
      <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
      className='flex flex-shrink-0'>
        {id === 0 && imgUrl.map((item, index) => (
          <img className='w-40 ml-10' key={index} src={item} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className='flex flex-shrink-0'>
          {id === 0 && imgUrl.map((item, index) => (
            <img className='w-40 ml-10' key={index} src={item} alt="" />
          ))}
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className='flex flex-shrink-0'>
          {id === 0 && imgUrl.map((item, index) => (
            <img className='w-40 ml-10' key={index} src={item} alt="" />
          ))}
      </motion.div>
    </div>
  )
}

export default Marquee