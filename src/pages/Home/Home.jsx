import React from 'react'
import Banner from './Banner'
import CategorySwiper from './CategorySwiper'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='my-10'>
      <CategorySwiper></CategorySwiper>

      </div>
    </div>
  )
}

export default Home
