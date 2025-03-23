import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800'>404</h1>
      <p className='mt-2 text-lg text-gray-600'>
        The page you're looking for does not exist.
      </p>
      <Link to='/'>
        <button className='mt-6 bg-[#5CD6FF] text-black px-4 py-2 rounded-full border-2 border-transparent hover:bg-transparent hover:border-[#5CD6FF] transition-all duration-300'>
          Go To HomePage
        </button>
      </Link>
    </div>
  );
};

export default Error;
