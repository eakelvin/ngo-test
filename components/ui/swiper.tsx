"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { fundraisers } from '@/utils/data';

const SwiperCards: React.FC = () => {
    const [swiperRef, setSwiperRef] = useState<any>(null);

    return (
        <>
            <div className='md:hidden'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className=""
                >
                    {fundraisers.map((remote, index) => (
                        <SwiperSlide className=''>
                            <Card key={index} className="">
                                <CardHeader>
                                    <Image src={remote.image} alt='' />
                                    <CardTitle>{remote.job}</CardTitle>
                                </CardHeader>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='hidden md:flex'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className=""
                >
                    {fundraisers.map((remote, index) => (
                        <SwiperSlide className=''>
                            <Card key={index} className="">
                                <CardHeader>
                                    <Image src={remote.image} alt='' />
                                    <CardTitle>{remote.job}</CardTitle>
                                </CardHeader>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default SwiperCards;