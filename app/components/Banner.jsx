import Image from 'next/image';
import BannerBg from '../../public/banner-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-center h-[350px]"
            style={{ backgroundImage: `url(${BannerBg.src})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-10"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full 2xl:px-20 xl-custom:px-16 xl:px-14 lg-custom:px-12 lg:px-10 md-custom:px-8 md:px-6 px-4 text-white">

                {/* Text Content */}
                <div className="flex w-full lg:flex-row flex-col justify-between">
                    <div className='lg:w-[50%]'>
                        <h1 className="lg-custom:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[24px] font-bold leading-[1.25] mb-4">
                            Hire me <br /> as a product design great skills elite.
                        </h1>
                    </div>
                    <div className='lg:w-[50%] flex flex-col justify-center'>
                        <p className="lg:text-2xl md:text-xl sm:text-lg text-base mb-8">
                            Innovative product designer, turning unique ideas into impactful solutions.
                        </p>

                        {/* Button */}
                        <button className="sm:w-48 w-40 sm:py-[14px] py-[12px] md:text-[17px] sm:text-base text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
                            Download CV <FontAwesomeIcon icon={faDownload} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
