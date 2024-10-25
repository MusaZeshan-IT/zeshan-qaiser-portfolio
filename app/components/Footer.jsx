import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCodeCompare, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import FooterBg from '../../public/footer-bg.jpg';

const Footer = () => {
    return (
        <footer className="bg-[rgb(4,9,29)] text-gray-300 py-10 2xl:px-20 xl-custom:px-16 xl:px-14 lg-custom:px-12 lg:px-10 md-custom:px-8 md:px-6 px-4">
            <div className="flex md:flex-row flex-col md:gap-0 gap-y-10 pt-10 lg:mb-36" style={{ backgroundImage: `url(${FooterBg.src})`, backgroundSize: 'cover', backgroundPosition: '100px 10px' }}>

                {/* Logo and Description Section */}
                <div className="lg:w-3/12 md:w-6/12 mr-10">
                    <div className="flex gap-2 items-center">
                        <div className="bg-blue-600 rounded-full w-11 h-11 flex justify-center items-center">
                            <FontAwesomeIcon className="text-white h-5" icon={faCodeCompare} />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">fallow</h2>
                    </div>
                    <p className="mt-6 mb-5 text-white">
                        We work with a passion for taking challenges and creating <span className="text-blue-500">blue</span> ones in the advertising sector.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex gap-3">
                        <SocialIcon href="#" label="Facebook" icon={faFacebookF} />
                        <SocialIcon href="#" label="Twitter" icon={faTwitter} />
                        <SocialIcon href="#" label="Instagram" icon={faInstagram} />
                        <SocialIcon href="#" label="YouTube" icon={faYoutube} />
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex xs:flex-row flex-col gap-10 md:w-6/12 sm:w-8/12 w-full">
                    <FooterSection title="Links" items={["Home", "Services", "Blog", "Contact"]} />
                    <FooterSection title="Services" items={["Graphic Design", "Web Design", "Product Design", "Logo Design"]} />
                </div>

                {/* Official Info */}
                <div className="hidden lg:block lg:w-3/12 lg:pl-10 lg:border-l border-gray-800">
                    <h3 className="text-2xl font-semibold text-white mb-5">Official Info:</h3>
                    <ContactInfo label="Zeshan Qaiser" icon={faUser} />
                    <ContactInfo label="zeshanqaiser.it@gmail.com" icon={faEnvelope} />
                    <ContactInfo label="1-888-452-1505" icon={faPhone} />
                </div>
            </div>

            {/* Mobile Official Info */}
            <div className="mt-10 mb-28 lg:hidden">
                <h3 className="text-2xl font-semibold text-white mb-5">Official Info:</h3>
                <div className="flex flex-col">
                    <ContactInfo label="Zeshan Qaiser" icon={faUser} />
                    <ContactInfo label="1-888-452-1505" icon={faPhone} />
                    <ContactInfo label="zeshanqaiser.it@gmail.com" icon={faEnvelope} />
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-6 text-center">
                <p className="text-white text-lg">© 2024 - All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, label, icon }) => (
    <a href={href} aria-label={label} className="grid place-items-center text-gray-400 bg-gray-800 h-10 w-10 rounded-full hover:text-white transition-colors">
        <FontAwesomeIcon icon={icon} />
    </a>
);

// Reusable Footer Section Component
const FooterSection = ({ title, items }) => (
    <div className="w-6/12 md:px-5 lg:px-10 lg:border-l border-gray-800">
        <h3 className="text-2xl font-semibold text-white mb-5">{title}</h3>
        <ul className="text-white font-medium space-y-3">
            {items.map((item, index) => (
                <li key={index}><a href="#" className="hover:text-blue-500 transition-colors">{item}</a></li>
            ))}
        </ul>
    </div>
);

// Reusable Contact Info Component
const ContactInfo = ({ label, icon }) => (
    <div>
        <p className="flex items-center font-medium text-white mb-4">
            <FontAwesomeIcon icon={icon} className="mr-2 text-blue-600" />{label}
        </p>
    </div>
);

export default Footer;
