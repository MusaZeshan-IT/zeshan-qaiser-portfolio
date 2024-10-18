import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../public/hero.png';
import Arrow from '../../public/arrow.png';

const Hero = () => {
    return (
        <div className='px-16 py-4 h-fit bg-[rgb(245,247,246)] w-full'>
            <div className='flex justify-between relative'>
                <div>
                    <h1 className='mt-20 text-[64px] font-bold leading-tight'>
                        Hey, I am
                        <br />
                        Zeshan Qaiser
                        <br />
                        <div className='w-full overflow-hidden relative'>
                            Graphic Designer
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
                    <p className='text-gray-500 text-2xl mt-5'>Agency work with top-rated talented people that provide the best services.</p>
                    <button className='flex justify-center items-center gap-x-2 bg-blue-600 text-white rounded-lg px-6 py-4 mt-8' type='button'>
                        Hire me
                        <FontAwesomeIcon className='w-4 h-4' icon={faArrowRightLong} />
                    </button>
                </div>
                <Image className='h-[600px]' src={HeroImg} alt="Hero Image" />
            </div>
        </div>
    );
}

export default Hero;
