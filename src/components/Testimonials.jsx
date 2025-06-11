import {HiArrowSmRight} from 'react-icons/hi';
import {HiArrowSmLeft} from 'react-icons/hi';
import React, { useState } from 'react';
import {BsDot} from 'react-icons/bs';



function Testimonials () {


  const slides = [

    {
      image: 'https://d3k81ch9hvuctc.cloudfront.net/company/TMQ9Tj/images/81c4a85b-a474-40b6-92cf-fc76aa1fe1f2.png', 
      text: "I managed Jaiah during her time at Restorganic and she has been an incredible team player from the beginning. Jaiah is a very professional individual and her strategic mindset has helped the growth of Restorganic. Jaiah also possesses very useful technical and problem-solving skills in the field of email development, ESP platforms, and digital marketing.",
      person: "Savinda Weerasinghe ||  Director at Restorganic"
    },

    {
      image: 'https://i.ibb.co/gZtFqsm9/mabelline.jpg', 
      text: "Jaiah and I both worked in the campaign delivery team at MAB together. She is a great team player, always willing to lend a helping hand and has a keen eye for detail. It's been a great pleasure working with Jaiah and I wish her all the best in her future endeavours.",
      person: "Mabelline Tan || Campaign Executive at Mitchells & Butlers PLC",
    },
    {
      image: 'https://i.ibb.co/Y4PxXwqt/olivia.jpg', 
      text: "Jaiah started with Cherith Simmons on a placement for Marketing and HR, my role was marketing manager so was her direct line manager. Jaiah was a very fast learner and capable of managing multiple tasks, projects and roles at once. The marketing element of her role included social media, email campaigns, sales, account management and more. The HR function of Jaiah's role was primarily assisting with changes to policies and procedures, recruitment and line-managing work experience students. Jaiah put 100% into her work every day, was never late and was very professional. Jaiah is a great member of the team and will be an asset to any organisation who takes her on next.",
      person: "Olivia Beke || Marketing Professional"
    },

    {
      image: 'https://i.ibb.co/XfGZ2bHp/matt.jpg', 
      text: "Jaiah nurtured the Baby & Child and Touring category CRM programmes, working with suppliers like Joie and leading the Christmas kids’ bikes campaign. She also supported the team on key 'Email me when back in stock' and e-receipt projects. Jaiah is dependable, has good creative ideas and is excellent at managing stages of a campaign or project to deadlines.",
      person: "Matthew Storey || Group CRM Manager at Halfords"
    },
   
   

  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1; 
    setCurrentIndex(newIndex);
    console.log(currentIndex)

  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  
  return (

    <>


    <div name='testimonials' className='max-w-[800px] h-full m-auto py-16 px-4 relative group'>

            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FFC5B9]'>TESTIMONIALS</p>
            </div>



      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 flex flex-col flex-wrap justify-center items-center'>

      <img src={slides[currentIndex].image} alt='pic' className='rounded-full' style={{width: '250px', height: '250px'}}/>

      <p className='text-2xl text-gray-300 py-4 max-w-[900px] text-center'> {slides[currentIndex].text}  </p>

      <p className='text-2xl text-gray-300 py-4 max-w-[900px] text-center font-bold'> {slides[currentIndex].person}  </p>

      </div>


       {/*Left arrow*/}
       <div>
        <HiArrowSmLeft onClick={prevSlide} size={60}  className='hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'/>
      </div>
      

      {/*Right arrow*/}

      <div>
        <HiArrowSmRight onClick={nextSlide} size={60} className='hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'/>
      </div>

      <div className='flex top-3 justify-center text-white py-2'>

      {slides.map((slide, slideIndex) => (

        <div key={slideIndex} onClick={() => goToSlide (slideIndex)} className='text-2xl cursor-pointer'>
         <BsDot/>
          </div>


      ))}



      </div>
       
    </div>

</>
  );
};

export default Testimonials;