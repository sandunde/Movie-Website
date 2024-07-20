import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Img1 from "../../assets/actiong.png";
import Img2 from "../../assets/comedyg.png";
import Img3 from "../../assets/horror.png";
import Img4 from "../../assets/romanceg.png";
import Img5 from "../../assets/sci.png";
import Img6 from "../../assets/super.png";
import Img7 from "../../assets/thriller.png";
import Img8 from "../../assets/war.png";
import "./AllCategories.css";

const Swipe = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Img1} style={{ height: "150px" }} alt="Slide 1" />
                    <p className='swipe-text'>Action 👊</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img2} style={{ height: "150px" }} alt="Slide 2" />
                    <p className='swipe-text'>Comedy 🤡</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img3} style={{ height: "150px" }} alt="Slide 3" />
                    <p className='swipe-text'>Horror 👻</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img4} style={{ height: "150px" }} alt="Slide 4" />
                    <p className='swipe-text'>Romance 💕</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img5} style={{ height: "150px" }} alt="Slide 5" />
                    <p className='swipe-text'>Sci - fi 🚀</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img6} style={{ height: "150px" }} alt="Slide 6" />
                    <p className='swipe-text'>Super Hero 🦸🏻‍♂️</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img7} style={{ height: "150px" }} alt="Slide 7" />
                    <p className='swipe-text'>Thriller 🔪</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img8} style={{ height: "150px" }} alt="Slide 8" />
                    <p className='swipe-text'>War
                        ⚔️
                    </p>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Swipe;
