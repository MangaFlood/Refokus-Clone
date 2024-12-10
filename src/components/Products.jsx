import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'

function Products() {


    const productData = [
        {
            name: "Aeqitel",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dicta illo porro aspernatur expedita repellendus magni blanditiis vel architecto incidunt itaque voluptas repudiandae ducimus fugiat pariatur rem soluta, libero accusamus.",
            live: true,
            case: false
        },
        {
            name: "TTR",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dicta illo porro aspernatur expedita repellendus magni blanditiis vel architecto incidunt itaque voluptas repudiandae ducimus fugiat pariatur rem soluta, libero accusamus.",
            live: true,
            case: false
        },
        {
            name: "YIR 2022",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dicta illo porro aspernatur expedita repellendus magni blanditiis vel architecto incidunt itaque voluptas repudiandae ducimus fugiat pariatur rem soluta, libero accusamus.",
            live: true,
            case: false
        },
        {
            name: "Yahoo!",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dicta illo porro aspernatur expedita repellendus magni blanditiis vel architecto incidunt itaque voluptas repudiandae ducimus fugiat pariatur rem soluta, libero accusamus.",
            live: true,
            case: false
        },
        {
            name: "rainfall",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dicta illo porro aspernatur expedita repellendus magni blanditiis vel architecto incidunt itaque voluptas repudiandae ducimus fugiat pariatur rem soluta, libero accusamus.",
            live: true,
            case: true
        },
        {
            name: "jungle",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dicta illo porro aspernatur expedita repellendus magni blanditiis vel architecto incidunt itaque voluptas repudiandae ducimus fugiat pariatur rem soluta, libero accusamus.",
            live: true,
            case: true
        },
    ]

    const [pos, setPos] = useState(0)

    const handlePos = (val) => {
        setPos(val)
    }

  return (
    <div className=' my-52 relative'>
      <div>
        {productData.map((item, index) => (
            <Product 
                key={index}
                item={item}
                index={index}
                handlePos={handlePos}
            />
        ))}
      </div>
      <div className='absolute w-full h-full top-0 pointer-events-none'>
        <motion.div initial={{y: pos, x: "-50%"}} animate={{y: pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .6}} className='h-[23rem] w-[30rem] bg-white absolute left-[46.5%] -translate-x-[50%] rounded-lg overflow-hidden'>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-300 '></motion.div>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-400 '></motion.div>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-500 '></motion.div>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-600 '></motion.div>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-700 '></motion.div>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-800 '></motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Products
