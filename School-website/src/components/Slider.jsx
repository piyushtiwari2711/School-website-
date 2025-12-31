import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ view, data, space }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={space}
            slidesPerView={view}
            navigation
            pagination={{ clickable: true }}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

        >
            {data.map((el, index) =>
                <SwiperSlide key={index}>
                    {el}
                </SwiperSlide>
            )
}
        </Swiper>
    );
};

export default Slider;