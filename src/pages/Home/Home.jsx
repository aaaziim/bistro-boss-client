import React from 'react'
import { Helmet  } from 'react-helmet-async';

import Banner from './Banner'
import CategorySwiper from './CategorySwiper'
import PopularMenu from './PopularMenu'
import Featured from './Featured'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
         <Helmet >
                <title>Bisto Boss | Home</title>
              </Helmet>
      <Banner></Banner>
      <div className='my-10'>
      <CategorySwiper></CategorySwiper>
      </div>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
