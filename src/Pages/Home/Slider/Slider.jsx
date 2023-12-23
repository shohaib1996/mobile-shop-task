
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img className='h-[90vh] object-fill w-full'  src="https://unboxingtech.com.bd/public/uploads/all/FiO56BqfYIvbx3LI3dWDwL63nVA7p8wn4O2FgGFM.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[90vh] object-fill w-full'  src="https://unboxingtech.com.bd/public/uploads/all/f9gYH6jSSrsMxj6eGFTgYzx2OMNeyF21vrnipRGv.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[90vh] object-fill w-full'  src="https://unboxingtech.com.bd/public/uploads/all/r8oErvZw7wYyC6uXxG71lFQWqugSswvJtArNwTZv.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[90vh] object-fill w-full'  src="https://unboxingtech.com.bd/public/uploads/all/aCHZgr0NECGdUhXiFGwSLuDGjD70QI6AFh4wQgAN.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;