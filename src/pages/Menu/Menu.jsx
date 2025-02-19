import React from 'react'
import { Helmet  } from 'react-helmet-async';
import CTACover from '../Shared/CTACover'; 
import PopularMenu from '../Home/PopularMenu';
import img1 from "../../assets/menu/banner3.jpg"
import img2 from "../../assets/menu/dessert-bg.jpeg"
import img3 from "../../assets/menu/pizza-bg.jpg"
import img4 from "../../assets/menu/salad-bg.jpg"
import img5 from "../../assets/menu/soup-bg.jpg"



const Menu = () => {
  return (
    <div>
         <Helmet >
        <title>Bisto Boss | Menu</title>
      </Helmet>

      <CTACover
      title={"Our Menu"}
      subTitle={"Would you like to try a dish?"}
        img1={img1}
      ></CTACover>

    <PopularMenu
     heading={"TODAY'S OFFER"}
     subHeading={"Don't miss"}></PopularMenu>
      <CTACover
      title={"Desserts"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img2}
      ></CTACover>

    <PopularMenu
     heading={"Desserts"}
     subHeading={"Don't miss"}></PopularMenu>


<CTACover
      title={"Pizza"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img3}
      ></CTACover>

    <PopularMenu
     heading={"Pizza"}
     subHeading={"Don't miss"}></PopularMenu>

<CTACover
      title={"Salad"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img4}
      ></CTACover>

    <PopularMenu
     heading={"Salad"}
     subHeading={"Don't miss"}></PopularMenu>

<CTACover
      title={"Soup"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img1={img5}
      ></CTACover>

    <PopularMenu
     heading={"Soup"}
     subHeading={"Don't miss"}></PopularMenu>


 
      
    </div>
  )
}

export default Menu
