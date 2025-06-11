import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillFilePersonFill} from 'react-icons/bs';
import Jlogo from '../assets/jlogo.png';
import { Link } from 'react-scroll';


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    
  };

  console.log(nav);

  


  return (

    <>


    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <img src={Jlogo} alt='Logo' className='rounded-full' style={{width: '80px'}}/>
         
        </div>

         {/*Menu*/}

      
          <ul className='hidden md:flex'> 
          <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} duration={500}>
          Testimonials
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
          </ul>
       
        

     
          {/*Hamburger*/}

       <div onClick={handleClick} className='md:hidden z-10'>

        {!nav ? <FaBars /> : <FaTimes />}
          
        </div>


           {/*Mobile menu*/}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to='testimonials' smooth={true} duration={500}>
        Testimonials
          </Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>

  
        {/*Social icons*/}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full'
            href='https://www.linkedin.com/in/jaiah-de-castro-731a6212a' target='blank'> 
              LinkedIn <FaLinkedin size={30}/> 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
            <a className='flex justify-between items-center w-full'
            href='https://github.com/Jaiah5' target='blank'>
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-600'>
            <a className='flex justify-between items-center w-full'
            href='mailto:jaiahmarie5@gmail.com'>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600'>
            <a className='flex justify-between items-center w-full'
            href='Jaiah Marie De Castro CV.pdf' download='Jaiah Marie De Castro CV.pdf'>
              CV <BsFillFilePersonFill size={30}/>
            </a>
          </li>
        </ul>


      </div>



      </div>

</>

  );
};

export default Navbar;