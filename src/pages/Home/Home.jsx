import React from 'react'
import Banner from './Banner'
import CategorySwiper from './CategorySwiper'
import PopularMenu from './PopularMenu'
import Featured from './Featured'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='my-10'>
      <CategorySwiper></CategorySwiper>
      </div>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  )
}

export default Home
