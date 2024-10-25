"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBars, faCodeCompare, faEnvelope, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='py-4 2xl:px-20 xl-custom:px-16 xl:px-14 lg-custom:px-12 lg:px-10 md-custom:px-8 md:px-6 px-4 bg-[rgb(245,247,246)]'>
            <div className="flex items-center justify-between">
                <div>
                    <div className='flex gap-x-10'>
                        <div className='md:flex hidden gap-x-2 items-center'>
                            <FontAwesomeIcon className='text-blue-500 h-4' icon={faEnvelope} />
                            <p className='text-gray-500'>zeshanqaiser.it@gmail.com</p>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <FontAwesomeIcon className='text-blue-500 h-4' icon={faPhone} />
                            <p className='text-gray-500'>+92 307-9410053</p>
                        </div>
                    </div>
                </div>
                <div className='flex xs:gap-x-6 2xs-custom:gap-x-5 gap-x-4 text-gray-500'>
                    <p className='h-4 w-4'><FontAwesomeIcon icon={faFacebook} /></p>
                    <p className='h-4 w-4'><FontAwesomeIcon icon={faInstagram} /></p>
                    <p className='h-4 w-4'><FontAwesomeIcon icon={faTwitter} /></p>
                    <p className='h-4 w-4'><FontAwesomeIcon icon={faLinkedinIn} /></p>
                </div>
            </div>
            <div className='w-full mt-3 bg-white shadow-[0_0_20px_0.1px_rgba(0,0,0,0.05)] rounded-xl'>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex gap-x-2 items-center'>
                        {/* Logo */}
                        <div className='bg-blue-600 rounded-full w-11 h-11 flex justify-center items-center'>
                            <FontAwesomeIcon className='text-white h-5' icon={faCodeCompare} />
                        </div>
                        <h1 className='text-[34px] tracking-[0.02em] font-bold'>fallow</h1>
                    </div>
                    <div className='lg:flex hidden xl:gap-x-16 lg-custom:gap-x-12 gap-x-10 items-center'>
                        <div className='flex xl:gap-x-10 lg-custom:gap-x-9 gap-x-7 text-[17px]'>
                            <h3 className='font-medium text-gray-800'>Services</h3>
                            <h3 className='font-medium text-gray-800'>Contact</h3>
                            <h3 className='font-medium text-gray-800'>About</h3>
                            <h3 className='font-medium text-gray-800'>Work</h3>
                            <h3 className='font-medium text-gray-800'>Portfolio</h3>
                        </div>
                        <div>
                            <button className='flex gap-x-2 font-medium items-center bg-blue-600 rounded-lg px-5 py-[13px] text-white'>
                                Lets Talk
                                <FontAwesomeIcon className="h-4" icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>
                    <div className='lg:hidden h-full' onClick={toggleSidebar}>
                        <FontAwesomeIcon size='lg' icon={faBars} />
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="fixed top-0 left-0 w-64 h-full bg-white p-5 shadow-lg transition-transform transform translate-x-0 z-50">
                    <div className="flex justify-between">
                        <div className='flex gap-x-2 items-center'>
                            {/* Logo */}
                            <div className='bg-blue-600 rounded-full w-10 h-10 flex justify-center items-center'>
                                <FontAwesomeIcon className='text-white h-[18px]' icon={faCodeCompare} />
                            </div>
                            <h1 className='text-[30px] tracking-[0.02em] font-bold'>fallow</h1>
                        </div>
                        <button onClick={toggleSidebar}>
                            <FontAwesomeIcon size='lg' icon={faXmark} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-y-2 text-lg mt-10">
                        <div className='flex items-center justify-between'>
                            <h3 className='font-medium text-gray-800'>Services</h3>
                            <FontAwesomeIcon className='text-gray-800' size='sm' icon={faArrowRightLong} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-medium text-gray-800'>Contact</h3>
                            <FontAwesomeIcon className='text-gray-800' size='sm' icon={faArrowRightLong} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-medium text-gray-800'>About</h3>
                            <FontAwesomeIcon className='text-gray-800' size='sm' icon={faArrowRightLong} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-medium text-gray-800'>Work</h3>
                            <FontAwesomeIcon className='text-gray-800' size='sm' icon={faArrowRightLong} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-medium text-gray-800'>Portfolio</h3>
                            <FontAwesomeIcon className='text-gray-800' size='sm' icon={faArrowRightLong} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
