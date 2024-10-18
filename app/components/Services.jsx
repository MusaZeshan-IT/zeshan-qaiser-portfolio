import React from 'react';
import GDIcon from '../../public/icons/gd-icon.png';
import PDIcon from '../../public/icons/pd-icon.png';
import WDIcon from '../../public/icons/wd-icon.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className='px-16'>
            <div className='w-full flex items-center gap-x-14'>
                <h1 className='w-[42%] font-bold text-[46px] leading-[1.3]'>
                    Unmatched Expertise to Elevate Your Brand
                </h1>
                <p className='w-[58%] text-gray-500 text-[19px] leading-[1.4]'>

                    We turn your ideas into stunning digital experiences. Our expert team delivers custom solutions that exceed expectations and create lasting value for you and your customers.
                </p>
            </div>
            <div className='mx-5 mt-10 grid grid-cols-3 gap-7 bg-gradient-to-b from-gray-50 via-[rgb(249,250,251)] pb-7'>

                <div className='bg-white shadow-[0_0_20px_0.1px_rgba(0,0,0,0.05)] rounded-xl py-7 px-6'>
                    <div className='grid place-items-center bg-[rgb(231,233,238)] rounded-full h-[72px] w-[72px] p-[7px]'>
                        <Image className='relative left-[14px] top-[2px] h-full w-full' src={GDIcon} alt="Graphic Design Icon" />
                    </div>
                    <h2 className='text-gray-800 mt-5 font-bold text-[22.5px] leading-snug'>Premium Graphic and Logo Design Services</h2>
                    <p className='text-gray-500 text-lg mt-4'>
                        Elevate your brand's identity with custom, high-quality graphic and logo designs that capture the essence of your vision.
                    </p>
                    <p className='text-gray-800 mt-8 text-base underline flex gap-x-1 items-center'>
                        Discover More
                        <FontAwesomeIcon className='h-4' icon={faArrowRightLong} />
                    </p>
                </div>

                <div className='bg-white shadow-[0_0_20px_0.1px_rgba(0,0,0,0.05)] rounded-xl py-7 px-6'>
                    <div className='grid place-items-center bg-[rgb(231,233,238)] rounded-full h-[72px] w-[72px] p-[7px]'>
                        <Image className='relative left-[14px] top-[2px] h-full w-full' src={PDIcon} alt="Pattern Design Icon" />
                    </div>
                    <h2 className='text-gray-800 mt-5 font-bold text-[22.5px] leading-snug'>Custom Pattern Design for Unique Branding</h2>
                    <p className='text-gray-500 text-lg mt-4'>
                        Bring your ideas to life with unique, custom patterns designed to enhance your brand's aesthetic across various platforms.
                    </p>
                    <p className='text-gray-800 mt-8 text-base underline flex gap-x-1 items-center'>
                        Explore Now
                        <FontAwesomeIcon className='h-4' icon={faArrowRightLong} />
                    </p>
                </div>

                <div className='bg-white shadow-[0_0_20px_0.1px_rgba(0,0,0,0.05)] rounded-xl py-7 px-6'>
                    <div className='grid place-items-center bg-[rgb(231,233,238)] rounded-full h-[72px] w-[72px] p-[7px]'>
                        <Image className='relative left-[14px] top-[2px] h-full w-full' src={WDIcon} alt="Web Design Icon" />
                    </div>
                    <h2 className='text-gray-800 mt-5 font-bold text-[22.5px] leading-snug'>Expert Web Design and UI/UX Solutions</h2>
                    <p className='text-gray-500 text-lg mt-4'>
                        Create intuitive and captivating digital experiences that blend form and function, ensuring seamless user interaction.
                    </p>
                    <p className='text-gray-800 mt-8 text-base underline flex gap-x-1 items-center'>
                        Learn More
                        <FontAwesomeIcon className='h-4' icon={faArrowRightLong} />
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Services;
