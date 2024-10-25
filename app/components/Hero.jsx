"use client";

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../public/hero.png';
import Arrow from '../../public/arrow.png';

const Hero = () => {
    return (
        <div className='2xl:px-20 xl-custom:px-16 xl:px-14 lg-custom:px-12 lg:px-10 md-custom:px-28 md:px-24 sm-custom:px-20 sm:px-16 xs-custom:px-12 xs:px-8 2xs-custom:px-6 px-4 py-4 h-fit bg-[rgb(245,247,246)] w-full'>
            <div className='flex lg:flex-row flex-col gap-10 justify-between'>
                <div className='lg:w-6/12'>
                    <h1 className='mt-20 xl:text-[64px] lg-custom:text-[58px] lg:text-[54px] md:text-[50px] sm:text-[47px] xs:text-[45px] 2xs-custom:text-[42px] 2xs:text-[38px] text-[34px] font-bold leading-tight'>
                        Hey, I am <br /> Zeshan Qaiser <br /> Graphic Designer
                        <div className='w-full overflow-hidden'>
                            <svg width="495" height="18" viewBox="0 0 495 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_704_1264)">
                                    <path d="M5 13C90.8746 6.96301 308.099 -1.48877 490 13" stroke="#DAED1A" strokeWidth="10" strokeLinecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_704_1264">
                                        <rect width="495" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </h1>
                    <p className='text-gray-500 md:text-2xl sm:text-xl text-[18.5px] sm:mt-5 mt-4'>Agency work with top-rated talented people that provide the best services.</p>
                    <button className='flex justify-center items-center text-[17px] gap-x-2 bg-blue-600 text-white rounded-lg px-[22px] py-[14px] mt-8' type='button'>
                        Hire me
                        <FontAwesomeIcon className='w-4 h-4' icon={faArrowRightLong} />
                    </button>
                </div>
                <div className='lg:w-6/12'>
                    <Image className='lg-custom:h-[600px] lg:h-[550px]' src={HeroImg} alt="Hero Image" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
