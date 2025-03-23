import { useState } from 'react';
import { FaLinkedin, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsTranslate } from 'react-icons/bs';
import SupremeLogo from '../../assets/images/Supreme_logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <Link to='/'>
              <img src={SupremeLogo} alt='Supreme Logo' className='h-8' />
            </Link>
          </div>
          `{' '}
          <div className='hidden md:flex items-center space-x-8'>
            <Link to='/'>
              <button className='bg-[#5CD6FF] text-black px-4 py-2 rounded-full border-2 border-transparent hover:bg-transparent hover:border-[#5CD6FF]  transition-all duration-300'>
                Contact Us
              </button>
            </Link>

            <a
              href='https://www.linkedin.com/company/supreme-group-company/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-blue-500'
            >
              <FaLinkedin size={24} />
            </a>
            <button className='flex text-gray-700 hover:text-blue-500 '>
              <BsTranslate size={24} />
              <span className='ps-2 font-semibold'>ENG</span>
            </button>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 hover:text-blue-500 focus:outline-none'
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex justify-end p-4'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 hover:text-blue-500 focus:outline-none'
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className='px-4 space-y-4'>
            <Link to='/'>
              <button className='bg-[#5CD6FF] text-black px-4 py-2 rounded-full border-2 border-transparent hover:bg-transparent hover:border-[#5CD6FF]  transition-all duration-300'>
                Contact Us
              </button>
            </Link>
            <div className='flex'>
              <a
                href='https://www.linkedin.com/company/supreme-group-company/'
                target='_blank'
                rel='noopener noreferrer'
                className='block text-gray-700 hover:text-blue-500'
              >
                <FaLinkedin size={24} />
              </a>
              <button className='flex block text-gray-700 hover:text-blue-500 ms-4'>
                <BsTranslate size={24} />
                <span className='ps-2 font-semibold'>ENG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
