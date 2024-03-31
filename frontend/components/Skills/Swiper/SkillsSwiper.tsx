"use client"

import * as React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import SkillsCard from '../SkillsCard/SkillsCard';

import { codingLanguages, frontendDevelopment, backendDevelopment, developmentCycle } from '@/config/SkillsConfig';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


const allSkills = [
  {
    header: "Languages",
    list: codingLanguages,
  },
  {
    header: "Frontend",
    list: frontendDevelopment,
  },
  {
    header: "Backend",
    list: backendDevelopment,
  },
  {
    header: "Development Cycle",
    list: developmentCycle,
  },
];

export default function SkillsSwiper() {
    return (
        <div className="flex flex-wrap items-center justify-between md:grid-cols-2 x-md:grid-rows-2 gap-y-16 md:gap-x-10 border-2 border-black dark:border-white rounded bg-neutral-300 dark:bg-neutral-900">
            <Swiper
                modules={[Pagination]}
                loop={true}
                spaceBetween={30}
                pagination={{
                  dynamicBullets: false,
                  clickable: true
                }}
                style={{
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-size": "10px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}
            >
            {allSkills.map((currentSkills, index) => {
                return (
                <SwiperSlide className="p-4 text-center h-full grow" key={index}>
                    <h1 className="text-2xl font-light border-b-2 border-black dark:border-white">{currentSkills.header}</h1>
                    <SkillsCard className="p-2 pb-8" skills={currentSkills.list}/>
                </SwiperSlide>
                );
            })}
            </Swiper>
        </div>
    );
}
