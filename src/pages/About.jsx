import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import image from '../assets/website/background1.jpeg'
import React from 'react'

const About = () => {
   
  return (
    <div >
        <div><Navbar></Navbar></div>
<div className='dark:bg-black dark:text-white'>
   
   <div className='m-[5%]'>
    <div className=''>
              <h1 className='text-2xl font-extrabold md:text-4xl lg:text-6xl'> Request Get <span className='bg-gradient-to-r from-white to-[#6153cd] animate-pulse text-black rounded-xl'>Live</span>  </h1>
               <p className='p-1 md:text-xl md:p-2 lg:text-xl lg:p-3' >At your door ... With <span className='underline'>Kanthariya</span></p>
               <div className='h-screen'>
                 <img src={image}  className='object-cover'/>
               </div>

    </div>
    <div id='values' >
        <div className='border w-3/4 md:w-3/5 lg:w-1/2 backdrop-blur rounded-lg 
        shadow-md  opacity-80 z-1 absolute -my-[44%] m-[4%] md:-my-[40%] md:m-[7%]  lg:-my-[30%] lg:m-[10%]   
         '>
            <h1 className='text-2xl font-bold ml-1 md:text-4xl md:ml-2 xl:text-6xl xl:ml-3 text-[#8c1d54]'>We Are </h1>
            <p className='font-bold p-1 text-sm md:text-xl md:p-2 lg:text-2xl lg:p-3'>your trusted partner in IT solutions and services since 2020. As a proud member of the expansive Kanthariya Group, we are dedicated to delivering excellence and innovation across various industries, including textiles, mills, and automobiles.
            </p>

                </div>
 
    </div>

    <div className='my-[3%]  md:w-3/4  backdrop-blur rounded-lg 
        shadow-md 
         '>
            <h1 className='text-2xl font-bold ml-3 text-[#8c1d54]'>Vision</h1>
            <p className='text-sm p-2 md:text-xl lg:text-xl'>

            Our vision is to empower businesses with innovative IT solutions that foster growth and success. We strive to be a global leader in the IT industry, recognized for our commitment to excellence, integrity, and customer satisfaction.             
            </p>
        </div>

<hr />
        
        <div id='services' className=' lg:w-3/4
        my-[3%]  backdrop-blur rounded-lg 
        shadow-md  
         '>
            <h1 className='text-2xl font-bold ml-3 text-[#8c1d54]'>Services</h1>
            <p className='text-sm p-2 md:text-xl lg:text-2xl'>At Kanthariya Technologies, we offer a comprehensive range of IT services designed to optimize your business operations and drive growth  <br/>
             Our services include:
              <br/>
             <b>1) Custom Software Development</b> : Tailored solutions that fit your unique business requirements.<br/>
             <b>2) IT Consulting:</b> Expert advice to help you navigate the complexities of the digital landscape.<br />
            <b>3) Managed IT Services:</b>  End-to-end management of your IT infrastructure to ensure seamless performance.<br />
           <b>4) Cloud Solutions:</b> Scalable and secure cloud services that enhance flexibility and efficiency.<br />
           <b>5) Cybersecurity:</b> Robust security measures to protect your data and IT assets.
  </p>
        </div>
       
   </div>
 
</div>

   <div className="bottom-0"> <Footer></Footer></div>
     </div>
  )

}
export default About
