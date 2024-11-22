import React from 'react'


function Work() {

    const imageData = [
        {
            url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/77b5b783911401.5d4b03c198716.png",
            left: "53%",
            top: "45%",
            isActive: true
        },
        {
            url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bc71c7127720099.61481691386ac.jpg",
            left: "49%",
            top: "58%",
            isActive: false
        },
        {
            url: "https://cdn.dribbble.com/users/944137/screenshots/3640658/johny-preview.jpg",
            left: "40%",
            top: "60%",
            isActive: false
        },
        {
            url: "https://cdn.dribbble.com/users/944137/screenshots/14146522/media/813d573d9d8f96df2eff7bd14ea715af.jpg?resize=1600x1200&vertical=center",
            left: "59%",
            top: "43%",
            isActive: false
        },
        {
            url: "https://i.pinimg.com/736x/0c/e9/cb/0ce9cb359e2d5eea06799d959974d6d2.jpg",
            left: "55%",
            top: "50%",
            isActive: false
        },
        {
            url: "https://cdn.dribbble.com/users/1363968/screenshots/15758417/dribbble_shot.jpg",
            left: "60%",
            top: "60%",
            isActive: false
        }
    ]


  return (
    <div className='w-full mt-10'>
        <div className='max-w-screen-xl mt-20 mx-auto text-[30vw] relative'>
            <h1 className='text-[27vw] tracking-tight text-zinc-100 font-medium leading-none text-center lowercase'>Work</h1>
            <div className='w-full h-[55vh]  absolute top-0'>
                {imageData.map((item, index) => 
                    item.isActive && (
                        <img key={index} style={{left: item.left, top: item.top,}} className='w-72 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]' src={item.url} alt="" />
                    ))}
            </div>
        </div>

    </div>
  )
}

export default Work
