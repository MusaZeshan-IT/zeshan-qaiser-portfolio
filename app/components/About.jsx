import React from 'react';
import AboutImg from '../../public/about.png';
import Image from 'next/image';
import Signature from '../../public/signature.png';

const About = () => {
    return (
        <div className='bg-gray-50'>
            <div className='flex gap-x-20 justify-between'>
                <div className='w-[50%] flex justify-center items-center'>
                    <Image className="w-[85%] h-full" src={AboutImg} alt="" />
                </div>
                <div className='w-[50%]'>
                    <div className='w-[90%]'>
                        <h2 className='font-bold text-5xl mt-20'>World Leading Creative</h2>
                        <p className='text-gray-500 text-lg mt-5'>
                            Hello there! My name is Zeshan Qaiser. I am a web and graphic designer, and I'm very passionate and dedicated to my work. With 2 years experience as a professional a graphic designer.
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
