import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCodeCompare, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import FooterBg from '../../public/footer-bg.jpg';

const Footer = () => {
    return (
        <footer className="bg-[rgb(4,9,29)] text-gray-300 py-10">
            <div style={{ backgroundImage: `url(${FooterBg.src})`, backgroundSize: 'cover', backgroundPosition: '100px 10px' }} className="px-12 mx-auto flex pt-10 pb-36">

                {/* Logo and description */}
                <div className='w-3/12'>
                    <div className='flex gap-x-2 items-center'>
                        <div className='bg-blue-600 rounded-full w-11 h-11 flex justify-center items-center'>
                            <FontAwesomeIcon className='text-white h-5' icon={faCodeCompare} />
                        </div>
                        <h2 className="text-[32px] font-semibold text-white">fallow</h2>
                    </div>
                    <p className="mt-6 mb-5 text-white">
                        We work with a passion of taking challenges and creating
                        <span className="text-blue-500"> blue</span> ones in the advertising sector.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex gap-x-3">
                        <a href="#" aria-label="Facebook" className="grid place-items-center text-gray-400 bg-gray-800 h-10 w-10 rounded-full hover:text-white">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" aria-label="Twitter" className="grid place-items-center text-gray-400 bg-gray-800 h-10 w-10 rounded-full hover:text-white">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" aria-label="Instagram" className="grid place-items-center text-gray-400 bg-gray-800 h-10 w-10 rounded-full hover:text-white">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" aria-label="YouTube" className="grid place-items-center text-gray-400 bg-gray-800 h-10 w-10 rounded-full hover:text-white">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className='w-2/12 px-10 border-x border-gray-800'>
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-5">Links</h3>
                        <ul className='text-white font-medium'>
                            <li className="mb-3"><a href="#" className="hover:text-blue-500">Home</a></li>
                            <li className="mb-3"><a href="#" className="hover:text-blue-500">Service</a></li>
                            <li className="mb-3"><a href="#" className="hover:text-blue-500">Blog</a></li>
                            <li className="mb-3"><a href="#" className="hover:text-blue-500">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Services */}
                <div className='w-3/12 px-10 border-r border-gray-800'>
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-5">Services</h3>
                        <ul className='text-white font-medium'>
                            <li className="mb-3">Graphic Design</li>
                            <li className="mb-3">Web Design</li>
                            <li className="mb-3">Product Design</li>
                            <li className="mb-3">Logo Design</li>
                        </ul>
                    </div>
                </div>

                {/* Official Info */}
                <div className='w-3/12 ps-10'>
                    <h3 className="text-2xl font-semibold text-white mb-5">Official Info:</h3>
                    <p className="mb-4 font-medium text-white">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-600" />
                        zeshanqaiser.it@gmail.com
                    </p>
                    <p className="mb-6 font-medium text-white">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-600" />
                        1-888-452-1505
                    </p>

                    {/* Newsletter */}
                    <h3 className="text-2xl font-semibold text-white mb-5">Subscribe Newsletter</h3>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-gray-800 text-gray-300 p-[13px] rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-600 text-white p-[13px] rounded-r-md hover:bg-blue-700">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-6">
                <p className='text-white text-center text-[19px]'>Copyright © 2024 - All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
