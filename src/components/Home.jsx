import React from 'react';
import {BiRightArrowCircle} from 'react-icons/bi';
import Jaiah from '../assets/jaiah.jpeg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] pt-[400px] pb-[700px]' >
{/* //comit */}

        {/* Container*/}

        <div className='max-w-{1000px} mx-auto px-8 flex flex-col h-full justify-center items-center'>

        <div className='px-2 py-3'>
      <img src={Jaiah} alt='profilepic' className='rounded-full' style={{width: '220px', height: '260px'}}/>
      </div>

            <p className='text-gray-300 text-3xl font-semibold'>Hi my name is</p>
            <h1 className='text-4xl sm:text-6xl text-[#FFC5B9] font-semibold'>Jaiah De Castro</h1>
   
                <p className='text-lg sm:text-lg text-gray-300 py-4 max-w-[700px] text-center'>I am a consumer-focused and data-driven professional with a successful track record for working collaboratively at all levels and motivating individuals to obtain maximum performance. I would also like to consider myself as an innovative, resilient, and self-driven individual when it comes to meeting and exceeding goals and targets. Currently, I am looking for growth and opportunities to work with like-minded individuals to tackle some of today’s toughest business challenges.</p>
              


            <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-400 hover:cursor-pointer'><Link to='work' smooth={true} duration={500}>VIEW WORK</Link>
            <span className='animate-ping'><BiRightArrowCircle className='ml-3'/></span>
            </button>

        </div>
    </div>
    </div>
  );
};

export default Home;

