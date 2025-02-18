import React from 'react'

const MenuItem = ({item}) => {
    const { name, recipe, category, image, price  } = item;
  return (
    <div className='flex justify-around gap-2 space-y-2'>
        <img className='w-24 rounded-bl-full rounded-br-full rounded-tr-full' src={image} alt="" />
        <div>
            <h3 className='uppercase font-light'>
                {name}----
            </h3>
            <p className='font-extralight'>
                {recipe}
            </p>
        </div>
        <p className='text-yellow-400'>
            ${price}
        </p>
      
    </div>
  )
}

export default MenuItem
