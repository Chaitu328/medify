import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import slider1 from "../assets/slider1.png";
// import slider2 from "../assets/slider2.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

// const images = [slider1, slider2, slider1]; // Array of images

function Carousel({images}) {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {[...Array(3)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {images.map((image, imgIndex) => (
                                <img 
                                    key={imgIndex} 
                                    style={{ width: '30%', height: 'auto', marginRight: imgIndex < images.length - 1 ? '10px' : '0' }} 
                                    src={image} 
                                    alt={`slide ${imgIndex + 1} is not found`} 
                                />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousel;
