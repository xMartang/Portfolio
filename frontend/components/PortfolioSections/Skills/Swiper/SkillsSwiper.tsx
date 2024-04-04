"use client"

import * as React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import SkillsCard from '../../../common/ui/cards/SkillsCard';

import { codingLanguages, webDevelopment, developmentTools } from '@/config/SkillsConfig';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import ScrollAnimation from '@/components/common/animations/ScrollAnimation/ScrollAnimation';


const allSkills = [
  {
    header: "Languages",
    list: codingLanguages,
  },
  {
    header: "Web Development",
    list: webDevelopment,
  },
  {
    header: "Development Tools",
    list: developmentTools,
  },
];

export default function SkillsSwiper() {
    return (
        <ScrollAnimation threshold={0.1} animationOnVisible='animate-jump-in animate-duration-700' animationOnInvisible='animate-jump-out animate-duration-700'>
            <div className="flex flex-wrap items-center justify-center md:grid-cols-2 x-md:grid-rows-2 gap-y-16 md:gap-x-10 border-2 border-neutral-800 dark:border-neutral-400 rounded bg-neutral-300 dark:bg-neutral-900">
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
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                  }}
              >
              {allSkills.map((currentSkills, index) => {
                  return (
                  <SwiperSlide className="flex p-4 text-center h-full" key={index}>
                      <h1 className="text-2xl font-light border-b-2 border-black dark:border-white">{currentSkills.header}</h1>
                      <SkillsCard className="p-2 pb-8 grow" skills={currentSkills.list}/>
                  </SwiperSlide>
                  );
              })}
              </Swiper>
        </div>
      </ScrollAnimation>
    );
}
