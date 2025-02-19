import React, { useEffect, useState } from 'react'
import SectionHeading from '../Shared/SectionHeading'
import MenuItem from '../Shared/MenuItem'

const PopularMenu = ({heading,subHeading}) => {
    const [popularMenu, setPopularMenu] = useState([])
    useEffect(()=>{
        // fetch popular menu data from API and update state here
        // example:
        fetch('menu.json')
         .then(response => response.json())
         .then(data => {
            const popularItems = data.filter(item=> item.category==='popular')
            setPopularMenu(popularItems)
         })
         .catch(error => console.error('Error:', error));
  
    },[])
  return (
    <section className='my-10'>
          <SectionHeading
      subHeading={subHeading} 
      heading={heading}>

      </SectionHeading>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>

      { popularMenu.map(item=><MenuItem key={item._id}
      item={item}>

      </MenuItem>)}
      </div>
    <div className='text-center'>
        <button className="btn btn-outline border-0 border-b-4 border-b-black text-center">Order Now</button>
    </div>
        

    </section>
  )
}

export default PopularMenu
