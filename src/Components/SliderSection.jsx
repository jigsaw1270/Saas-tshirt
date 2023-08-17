
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import Slide1 from '../assets/tshirts/canvas 1.png'
import Slide2 from '../assets/tshirts/canvas 2.png'
import Slide3 from '../assets/tshirts/canvas 3.png'
import Slide4 from '../assets/tshirts/canvas 4.png'
import Slide5 from '../assets/tshirts/canvas 5.png'
import Slide6 from '../assets/tshirts/canvas 6.png'
import Slide7 from '../assets/tshirts/canvas 7.png'
import Slide8 from '../assets/tshirts/canvas 8.png'
import Slide9 from '../assets/tshirts/canvas 9.png'
import Slide10 from '../assets/tshirts/canvas 10.png'
import Slide11 from '../assets/tshirts/canvas 11.png'
import Slide12 from '../assets/tshirts/canvas 12.png'
import Slide13 from '../assets/tshirts/canvas 13.png'
import Slide14 from '../assets/tshirts/canvas 14.png'
import Slide15 from '../assets/tshirts/canvas 15.png'
import Slide16 from '../assets/tshirts/canvas 16.png'
import Slide17 from '../assets/tshirts/canvas 17.png'
import Slide18 from '../assets/tshirts/canvas 18.png'
import Slide19 from '../assets/tshirts/canvas 19.png'




// import required modules
import { EffectCards } from 'swiper/modules';

const SliderSection = () => {
    return (
       <>
       
         <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>{Slide1}</SwiperSlide>
        <SwiperSlide>{Slide2}</SwiperSlide>
        <SwiperSlide>{Slide3}</SwiperSlide>
        <SwiperSlide>{Slide4}</SwiperSlide>
        <SwiperSlide>{Slide5}</SwiperSlide>
        <SwiperSlide>{Slide6}</SwiperSlide>
        <SwiperSlide>{Slide7}</SwiperSlide>
        <SwiperSlide>{Slide8}</SwiperSlide>
        <SwiperSlide>{Slide9}</SwiperSlide>
        <SwiperSlide>{Slide10}</SwiperSlide>
        <SwiperSlide>{Slide11}</SwiperSlide>
        <SwiperSlide>{Slide12}</SwiperSlide>
        <SwiperSlide>{Slide13}</SwiperSlide>
        <SwiperSlide>{Slide14}</SwiperSlide>
        <SwiperSlide>{Slide15}</SwiperSlide>
        <SwiperSlide>{Slide16}</SwiperSlide>
        <SwiperSlide>{Slide17}</SwiperSlide>
        <SwiperSlide>{Slide18}</SwiperSlide>
        <SwiperSlide>{Slide19}</SwiperSlide>
      </Swiper>
      </>
    );
};

export default SliderSection;