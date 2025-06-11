import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Adobe from '../assets/adobe-campaign.png';
import GA from '../assets/ga.png';
import Aem from '../assets/aem.png';
import Klaviyo from '../assets/klaviyo.png';
import Cheetah from '../assets/cheetah.png';
import Shopify from '../assets/shopify.png';
import Litmus from '../assets/litmus.png';



const Skills = () => {
  return (
    <>
    <div name="skills" className='element w-full h-screen bg-[#0a192f] text-gray-300 mt-[350px] sm:mt-[80px]'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FFC5B9]'>SKILLS</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={HTML} alt='HTML icon' className='w-20 mx-auto'/>
                <p className='my-4'>HTML</p>
                </div>
                

          
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={CSS} alt='CSS icon' className='w-20 mx-auto'/>
                <p className='my-4'>CSS</p>
                </div>
            

                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={JavaScript} alt='JavaScript icon' className='w-20 mx-auto'/>
                <p className='my-4'>JAVASCRIPT</p>
                </div>
            

            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={ReactImg} alt='ReactImg icon' className='w-20 mx-auto'/>
                <p className='my-4'>REACT</p>
                </div>
        

            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Node} alt='Node icon' className='w-20 mx-auto'/>
                <p className='my-4'>NODE</p>
                </div>
           

            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Adobe} alt='Adobe icon' className='w-20 mx-auto rounded-full'/>
                <p className='my-4'>ADOBE CAMPAIGN CLASSIC</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Aem} alt='Cheetah Digital icon' className='w-20 mx-auto rounded-full'/>
                <p className='my-4'>ADOBE EXPERIENCE MANAGER</p>
                </div>
            

            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={GA} alt='Google analytics icon' className='w-20 mx-auto'/>
                <p className='my-4'>GOOGLE ANALYTICS</p>
                </div>
            

          
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Cheetah} alt='Cheetah Digital icon' className='w-20 mx-auto rounded-full'/>
                <p className='my-4'>CHEETAH DIGITAL</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Klaviyo} alt='Cheetah Digital icon' className='w-50 h-20 mx-auto rounded-full'/>
                <p className='my-4'>KLAVIYO</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Litmus} alt='Cheetah Digital icon' className='w-50 h-20 mx-auto rounded-full'/>
                <p className='my-4'>LITMUS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Shopify} alt='Cheetah Digital icon' className='w-20 mx-auto rounded-full'/>
                <p className='my-4'>SHOPIFY</p>
                </div>

                
           

            
            </div>
        </div>
    </div>
    </>
  );
};

export default Skills;