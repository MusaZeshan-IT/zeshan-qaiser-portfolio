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
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-white">

                {/* Text Content */}
                <div className="flex justify-between">
                    <div className='w-[40%]'>
                        <h1 className="text-[32px] font-bold md:text-[40px] lg:text-[48px] leading-[1.25] mb-4">
                            Hire me <br /> as a product design great skills elite.
                        </h1>
                    </div>
                    <div className='w-[40%] flex flex-col justify-center'>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8">
                            Innovative product designer, turning unique ideas into impactful solutions.
                        </p>

                        {/* Button */}
                        <button className="w-48 py-[14px] text-base md:text-[17px] text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
                            Download CV <FontAwesomeIcon icon={faDownload} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
