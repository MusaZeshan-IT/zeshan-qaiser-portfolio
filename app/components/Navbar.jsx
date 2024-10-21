import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightLong, faCodeCompare, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <div className='py-4 px-16 bg-[rgb(245,247,246)]'>
            <div className="flex items-center justify-between">
                <div>
                    <div className='flex gap-x-10'>
                        <div className='flex gap-x-2 items-center'>
                            <FontAwesomeIcon className='text-blue-500 h-4' icon={faEnvelope} />
                            <p className='text-gray-500'>zeshanqaiser.it@gmail.com</p>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <FontAwesomeIcon className='text-blue-500 h-4' icon={faPhone} />
                            <p className='text-gray-500'>+92 307-9410053</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-6 text-gray-500'>
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
                    <div className='flex gap-x-16 items-center'>
                        <div className='flex gap-x-10 text-[17px]'>
                            <h3 className='font-medium text-gray-800'>Services</h3>
                            <h3 className='font-medium text-gray-800'>Contact</h3>
                            <h3 className='font-medium text-gray-800'>About</h3>
                            <h3 className='font-medium text-gray-800'>Work</h3>
                            <h3 className='font-medium text-gray-800'>Portfolio</h3>
                        </div>
                        <div>
                            <button className='flex gap-x-2 font-medium items-center bg-blue-600 rounded-lg px-5 py-[13px] text-white'>
                                Let's Talk
                                <FontAwesomeIcon className="h-4" icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
