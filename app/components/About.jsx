import React from 'react';
import AboutImg from '../../public/about.png';
import Image from 'next/image';
import Signature from '../../public/signature.png';

const About = () => {
    return (
        <div className='bg-gray-50'>
            <div className='lg:p-10 md:p-9 sm:p-8 xs:p-6 p-4 flex lg:flex-row flex-col lg:gap-x-20 justify-between'>
                <div className='xl:w-[50%] lg-custom:w-[55%] lg:w-[60%] flex justify-center items-center'>
                    <Image className="md-custom:w-[85%] md:[90%] sm:w-[95%] w-full h-full" src={AboutImg} alt="" />
                </div>
                <div className='xl:w-[50%] lg-custom:w-[45%] lg:w-[40%]'>
                    <div>
                        <h2 className='font-bold md-custom:text-5xl sm:text-[42px] text-[36px] md:mt-14 sm:mt-10 mt-6 leading-tight'>World Leading Creative</h2>
                        <p className='text-gray-500 lg:text-lg md:text-xl md:text-[19px] text-[18.5px] lg:mt-5 md-custom:mt-4 xs:mt-1 mt-2'>
                            Hello there! My name is Zeshan Qaiser. I am a web and graphic designer, and I am very passionate and dedicated to my work. With 2 years experience as a professional a graphic designer.
                        </p>
                        <div className='flex flex-col gap-6 mt-8'>
                            <div>
                                <div className='flex justify-between mb-3'>
                                    <p className='font-semibold text-lg'>Abode Illustrator</p>
                                    <p className='font-medium text-lg'>89%</p>
                                </div>
                                <div className='relative w-full h-[8px] bg-gray-200 rounded-full'>
                                    <div className='absolute top-0 left-0 h-full bg-gray-800 rounded-full' style={{ width: '89%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between mb-3'>
                                    <p className='font-semibold text-lg'>Figma</p>
                                    <p className='font-medium text-lg'>57%</p>
                                </div>
                                <div className='relative w-full h-[8px] bg-gray-200 rounded-full'>
                                    <div className='absolute top-0 left-0 h-full bg-gray-800 rounded-full' style={{ width: '57%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between mb-3'>
                                    <p className='font-semibold text-lg'>Abode Photoshop</p>
                                    <p className='font-medium text-lg'>76%</p>
                                </div>
                                <div className='relative w-full h-[8px] bg-gray-200 rounded-full'>
                                    <div className='absolute top-0 left-0 h-full bg-gray-800 rounded-full' style={{ width: '76%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <Image className='mt-8 h-16' src={Signature} alt=""></Image>
                            <p className=' font-medium text-xl'>CEO and Founder of Fallow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
