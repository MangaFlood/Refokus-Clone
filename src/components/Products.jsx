import React from 'react'
import Product from './Product'

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


  return (
    <div className='py-20 mt-20'>
      {productData.map((item, index) => (
        <Product 
            key={index}
            item={item}
        />
      ))}
    </div>
  )
}

export default Products
