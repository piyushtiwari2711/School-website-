import { Award, Heart, Star, Trophy } from 'lucide-react';
import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AchievementSlider = () => {
    const data = [
    {
      icon: Trophy,
      title: "State Level Winner",
      description: "Science Olympiad 2024",
      color: "text-yellow-600"
    },
    {
      icon: Award,
      title: "Best School Award",
      description: "Excellence in Education",
      color: "text-blue-600"
    },
    {
      icon: Star,
      title: "100% Results",
      description: "Class XII Board Exams",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Social Impact Award",
      color: "text-red-600"
    }
  ];
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

        >
            {data.map((el, index) =>
                <SwiperSlide key={index}>
                    <div key={index} className="text-center group">
                        <img src="https://c8.alamy.com/comp/GW2GE0/business-people-achievement-success-jumping-celebration-concept-GW2GE0.jpg" alt="no image" className='rounded-t-xl' />
                        <div className="bg-white rounded-b-xl p-4 flex gap-4 items-center">
                            <el.icon className={`size-7  ${el.color}`} />
                            <h3 className="text-lg text-gray-600 font-bold">{el.title}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            )
            }
        </Swiper>
    )
}

export default AchievementSlider
