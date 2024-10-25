"use client";

import { faAngleDown, faAngleUp, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Contact = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className='flex lg:flex-row flex-col gap-14 2xl:px-20 xl-custom:px-16 xl:px-14 lg-custom:px-12 lg:px-10 md-custom:px-8 md:px-6 px-4'>
            <div className='lg:w-5/12'>
                <h2 className='xl:text-5xl lg-custom:text-4xl text-3xl font-bold leading-snug text-gray-800'>
                    Have Any Thought. <br className='lg:block hidden' /> Contact Us
                </h2>
                <div className='flex flex-col gap-5 mt-8'>
                    {/* Get in touch with us */}
                    <div>
                        <div
                            className='flex items-center justify-between border-b border-gray-500 pb-7 cursor-pointer'
                            onClick={() => toggleSection(1)}
                        >
                            <h3 className='text-gray-900 font-medium text-[25.5px]'>
                                <span className='me-5'>01</span>
                                Get in touch with us
                            </h3>
                            <FontAwesomeIcon
                                icon={openSection === 1 ? faAngleUp : faAngleDown}
                                height={18}
                                className='ml-3'
                            />
                        </div>
                        {openSection === 1 && (
                            <div className='overflow-hidden transition-all duration-500 ease-in-out mt-3 text-gray-600'>
                                <p className='text-[17px] leading-[1.4]'>
                                    We're here to answer your questions and assist you with any inquiries. Reach out to us
                                    through the form and let's start a conversation. We value meaningful connections and are
                                    always eager to hear from you!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Ask a question */}
                    <div>
                        <div
                            className='flex items-center justify-between border-b border-gray-500 pb-7 cursor-pointer'
                            onClick={() => toggleSection(2)}
                        >
                            <h3 className='text-gray-900 font-medium text-[25.5px]'>
                                <span className='me-5'>02</span>
                                Ask a question
                            </h3>
                            <FontAwesomeIcon
                                icon={openSection === 2 ? faAngleUp : faAngleDown}
                                height={18}
                                className='ml-3'
                            />
                        </div>
                        {openSection === 2 && (
                            <div className='overflow-hidden transition-all duration-500 ease-in-out mt-3 text-gray-600'>
                                <p className='text-[17px] leading-[1.4]'>
                                    Got something on your mind? Whether it's about our services or anything else, ask away!
                                    We're here to provide clear, thoughtful responses to help you make informed decisions.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Hand over a project */}
                    <div>
                        <div
                            className='flex items-center justify-between border-b border-gray-500 pb-7 cursor-pointer'
                            onClick={() => toggleSection(3)}
                        >
                            <h3 className='text-gray-900 font-medium text-[25.5px]'>
                                <span className='me-5'>03</span>
                                Hand over a project
                            </h3>
                            <FontAwesomeIcon
                                icon={openSection === 3 ? faAngleUp : faAngleDown}
                                height={18}
                                className='ml-3'
                            />
                        </div>
                        {openSection === 3 && (
                            <div className='overflow-hidden transition-all duration-500 ease-in-out mt-3 text-gray-600'>
                                <p className='text-[17px] leading-[1.4]'>
                                    Ready to get started on your next big project? Hand it over to us, and we'll ensure it
                                    gets the attention it deserves. Let's build something amazing together.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className='lg:w-7/12'>
                <div className='bg-[rgb(248,247,253)] rounded-lg p-8 flex flex-col gap-y-6'>
                    <div className='flex md:flex-row flex-col gap-x-7 gap-y-5 justify-between'>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label className='text-gray-500 font-medium' htmlFor="fname">First Name</label>
                            <input placeholder='John' type="text" name="fname" id="fname" className='shadow-[0_0_10px_0.1px_rgba(0,0,0,0.04)] rounded-lg px-4 py-[10px]' />
                        </div>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label className='text-gray-500 font-medium' htmlFor="lname">Last Name</label>
                            <input placeholder='Smith' type="text" name="lname" id="lname" className='shadow-[0_0_10px_0.1px_rgba(0,0,0,0.04)] rounded-lg px-4 py-[10px]' />
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col gap-x-7 gap-y-5 justify-between'>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label className='text-gray-500 font-medium' htmlFor="email">Email</label>
                            <input placeholder='john.smith@gmail.com' type="text" name="email" id="email" className='shadow-[0_0_10px_0.1px_rgba(0,0,0,0.04)] rounded-lg px-4 py-[10px]' />
                        </div>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label className='text-gray-500 font-medium' htmlFor="phone">Phone</label>
                            <input placeholder='+1 (555) 123-4567' type="text" name="phone" id="phone" className='shadow-[0_0_10px_0.1px_rgba(0,0,0,0.04)] rounded-lg px-4 py-[10px]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label className='text-gray-500 font-medium' htmlFor="description">Description</label>
                        <textarea rows={7} name="description" id="description" className='shadow-[0_0_10px_0.1px_rgba(0,0,0,0.04)] rounded-lg px-4 py-[10px]' />
                    </div>
                    <button className='bg-blue-700 text-[14.5px] flex justify-center items-center text-white font-medium w-40 py-[12px] rounded-lg mt-7'>
                        Submit <FontAwesomeIcon icon={faArrowRightLong} height={12.5} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
