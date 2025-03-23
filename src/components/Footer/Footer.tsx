import { Link } from 'react-router-dom';
import SupremeLogo from '../../assets/images/Supreme_logo.svg';

const Footer = () => {
  return (
    <div className='w-container max-w-screen-lg mx-auto text-black my-20'>
      <div className='flex justify-start px-8 md:px-0'>
        <Link to='/'>
          <img
            src={SupremeLogo}
            className='h-10 md:h-12 xlg:h-12'
            alt='Supreme logo'
            title='logo'
          />
        </Link>
      </div>

      <div className='md:flex hidden flex-row items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8'>
        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
          <li className='mb-2 sg-translate font-semibold uppercase text-opacity-90'>
            Applications
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/applications/apparel'
            >
              <span className='sg-translate'>Apparel</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/applications/automotive'
            >
              <span className='sg-translate'>Automotive</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/applications/filtration'
            >
              <span className='sg-translate'>Filtration</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/applications/customised-nonwoven'
            >
              <span className='sg-translate'>Customised Solutions</span>
            </Link>
          </li>
        </ul>

        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
          <li className='mb-2 sg-translate uppercase font-bold'>Company</li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/who-we-are'
            >
              <span className='sg-translate'>Innovation</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/global-competency'
            >
              <span className='sg-translate'>Global Competency</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/about-us'
            >
              <span className='sg-translate'>About Us</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/contact-us'
            >
              <span className='sg-translate'>Contact Us</span>
            </Link>
          </li>
        </ul>

        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
          <li className='mb-2 sg-translate font-semibold uppercase text-opacity-90'>
            MORE
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/careers'
            >
              <span className='sg-translate'>Careers</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/privacy-policy'
            >
              <span className='sg-translate'>Privacy Policy</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/terms-and-conditions'
            >
              <span className='sg-translate'>Terms and Conditions</span>
            </Link>
          </li>
        </ul>

        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
          <li className='mb-2 sg-translate font-semibold uppercase text-opacity-90'>
            Follow Us
          </li>
          <li>
            <a
              href='https://www.linkedin.com/company/supreme-group-company/'
              target='_blank'
              rel='noopener noreferrer'
              className='block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm hover:text-black font-normal transition-all duration-300'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/company/supreme-group-company/'
              target='_blank'
              rel='noopener noreferrer'
              className='block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm hover:text-black font-normal transition-all duration-300'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/company/supreme-group-company/'
              target='_blank'
              rel='noopener noreferrer'
              className='block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm hover:text-black font-normal transition-all duration-300'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/company/supreme-group-company/'
              target='_blank'
              rel='noopener noreferrer'
              className='block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm hover:text-black font-normal transition-all duration-300'
            >
              Medium
            </a>
          </li>
        </ul>
      </div>

      <div className='grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8 px-8'>
        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
          <li className='font-semibold uppercase text-opacity-90'>
            Applications
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/applications/apparel'
            >
              <span className='sg-translate'>Apparel</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/applications/automotive'
            >
              <span className='sg-translate'>Automotive</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/applications/filtration'
            >
              <span className='sg-translate'>Filtration</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/applications/customised-nonwoven'
            >
              <span className='sg-translate'>Customised Nonwoven</span>
            </Link>
          </li>
        </ul>

        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
          <li className='uppercase font-bold'>Company</li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/who-we-are'
            >
              <span className='sg-translate'>Who We Are</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/global-competency'
            >
              <span className='sg-translate'>Global Competency</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/innovation'
            >
              <span className='sg-translate'>Innovation</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/esg-impact'
            >
              <span className='sg-translate'>ESG Impact</span>
            </Link>
          </li>
        </ul>

        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
          <li className='font-semibold uppercase text-opacity-90'>MORE</li>
          <li>
            <Link
              className='xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/contact-us'
            >
              <span className='sg-translate'>Contact Us</span>
            </Link>
          </li>
          <li>
            <Link
              className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100'
              to='/careers'
            >
              <span className='sg-translate'>Careers</span>
            </Link>
          </li>
        </ul>

        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
          <li className='font-semibold uppercase text-opacity-90'>Follow Us</li>
          <li>
            <a
              href='https://www.linkedin.com/company/supreme-group-company/'
              target='_blank'
              rel='noopener noreferrer'
              className='block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm hover:text-black font-normal transition-all duration-300'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className='flex gap-3 md:flex-row flex-col justify-between items-center blade-top-padding-xl mt-18'>
        <h6 className='md:block hidden text-sm text-black whitespace-nowrap'>
          ©2024. All Rights Reserved.
        </h6>
        <h6 className='md:block hidden text-sm text-black whitespace-nowrap'>
          Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
        </h6>
        <h6 className='md:hidden block text-sm text-black whitespace-nowrap'>
          ©2024. All Rights Reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
