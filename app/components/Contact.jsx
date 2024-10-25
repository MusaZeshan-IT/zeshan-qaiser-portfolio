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

                    {/* Reusable Dropdown Section */}
                    {[
                        { title: "Get in touch with us", content: "We're here to answer your questions and help with any inquiries you may have." },
                        { title: "Ask a question", content: "Got something on your mind? Feel free to ask us anything, and we'll get back to you shortly." },
                        { title: "Hand over a project", content: "Ready to get started on your next big project? Let us know how we can support you from start to finish." }
                    ].map((section, index) => (
                        <div key={index}>
                            <div
                                className='flex justify-between items-center border-b border-gray-500 pb-7 cursor-pointer'
                                onClick={() => toggleSection(index + 1)}
                            >
                                <h3 className='text-gray-900 font-medium xs:text-[25.5px] text-[23.5px]'>
                                    <span className='xs:me-5 2xs-custom:me-4 me-3'>{`0${index + 1}`}</span>
                                    {section.title}
                                </h3>
                                <FontAwesomeIcon
                                    icon={openSection === index + 1 ? faAngleUp : faAngleDown}
                                    height={18}
                                    className='xs:ml-3 ml-2'
                                />
                            </div>
                            <div
                                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openSection === index + 1 ? 'max-h-60' : 'max-h-0'
                                    }`}
                            >
                                <p className='text-[17px] leading-[1.4] text-gray-600 mt-3 px-2 py-4'>
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    ))}
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
};

export default Contact;
