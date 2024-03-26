"use client"

import * as React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const content = [
  {
    header: 'Title01',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
  },
  {
    header: 'Title02',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
  },
  {
    header: 'Title03',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
  },
];

export default function SkillsSwiper() {
    return (
        <div className="flex flex-wrap items-center justify-between md:grid-cols-2 x-md:grid-rows-2 gap-y-16 md:gap-x-10">
            <Swiper
                modules={[Pagination]}
                loop={true}
                spaceBetween={30}
            >
            {content.map((p, index) => {
                return (
                <SwiperSlide className="border-2 p-7 pb-16" key={index}>
                    <h1 className="font-bold">{p.header}</h1>
                    <p>{p.info}</p>
                </SwiperSlide>
                );
            })}
            </Swiper>
        </div>
    );
}
