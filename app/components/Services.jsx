import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import GDIcon from '../../public/icons/gd-icon.png';
import PDIcon from '../../public/icons/pd-icon.png';
import WDIcon from '../../public/icons/wd-icon.png';

const Services = () => {
    return (
        <div className='2xl:px-20 xl-custom:px-16 xl:px-14 lg-custom:px-12 lg:px-10 md-custom:px-8 md:px-6 px-4'>
            <div className='w-full flex items-center xl:gap-x-12 lg-custom:gap-x-10 gap-x-8'>
                <h1 className='xl:w-[44%] lg-custom:w-[46%] w-[48%] font-bold xl:text-[46px] lg-custom:text-[42px] text-[38px] leading-[1.3]'>
                    Unmatched Expertise to Elevate Your Brand
                </h1>
                <p className='xl:w-[56%] lg-custom:w-[54%] w-[52%] text-gray-500 lg-custom:text-[19px] text-[17px] leading-[1.4]'>
                    At the intersection of creativity and innovation, our team transforms ideas into immersive digital experiences that captivate and connect. With each project, we aim to enhance brand presence through expertly crafted visuals and seamless functionality. Let us elevate your brand with sophisticated solutions tailored to your unique identity.
                </p>
            </div>

            {/* Static Services Display */}
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-8 mt-8'>
                {/* Service 1 */}
                <div className='bg-white shadow-[0_0_20px_0.1px_rgba(0,0,0,0.05)] rounded-xl py-7 px-6 flex flex-col min-h-[420px] w-full'>
                    <div className='grid place-items-center bg-[rgb(231,233,238)] rounded-full h-[72px] w-[72px] p-[7px]'>
                        <Image className='relative left-[14px] top-[2px] h-full w-full' width={72} height={72} src={GDIcon} alt="Graphic Design Icon" />
                    </div>
                    <h2 className='text-gray-800 mt-5 font-bold text-[22.5px] leading-snug'>
                        Premium Graphic and Logo Design Services
                    </h2>
                    <p className='text-gray-500 text-lg mt-4 flex-grow'>
                        Elevate your brand with stunning, custom graphic and logo designs that capture attention and strengthen your brand’s identity.
                    </p>
                    <p className='text-gray-800 mt-8 text-base underline flex gap-x-1 items-center'>
                        Discover More
                        <FontAwesomeIcon className='h-4' icon={faArrowRightLong} />
                    </p>
                </div>

                {/* Service 2 */}
                <div className='bg-white shadow-[0_0_20px_0.1px_rgba(0,0,0,0.05)] rounded-xl py-7 px-6 min-h-[420px] w-full'>
                    <div className='grid place-items-center bg-[rgb(231,233,238)] rounded-full h-[72px] w-[72px] p-[7px]'>
                        <Image className='relative left-[14px] top-[2px] h-full w-full' width={72} height={72} src={PDIcon} alt="Pattern Design Icon" />
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

                {/* Service 3 */}
                <div className='bg-white shadow-[0_0_20px_0.1px_rgba(0,0,0,0.05)] rounded-xl py-7 px-6 min-h-[420px] w-full'>
                    <div className='grid place-items-center bg-[rgb(231,233,238)] rounded-full h-[72px] w-[72px] p-[7px]'>
                        <Image className='relative left-[14px] top-[2px] h-full w-full' width={72} height={72} src={WDIcon} alt="Web Design Icon" />
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
};

export default Services;
