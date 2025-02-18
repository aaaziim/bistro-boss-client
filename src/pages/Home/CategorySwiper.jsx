import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"
import SectionHeading from '../Shared/SectionHeading';
 

const CategorySwiper = () => {
  return (
   <section>
      <SectionHeading 
      subHeading={"From 11:00am to 10:00pm"} 
      heading={"Order Online"}>

      </SectionHeading>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <img src={img1} alt="slide1" />
                <p className='text-3xl uppercase text-center text-white -mt-20'>Salad</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img2} alt="slide2" />
                <p className='text-3xl uppercase text-center text-white -mt-20'>Soup</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img3} alt="slide3" />
                <p className='text-3xl uppercase text-center text-white -mt-20'>Desert</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img4} alt="slide4" />
                <p className='text-3xl uppercase text-center  text-white -mt-20'>Pizza</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img5} alt="slide5" />
                <p className='text-3xl uppercase text-center text-white -mt-20'>Salad</p>
            </div>
        </SwiperSlide>
      </Swiper>
   </section>
  )
}

export default CategorySwiper
