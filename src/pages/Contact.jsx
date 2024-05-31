import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import '../index.css'
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-gray-950 flex justify-between '>
         <div className='container py-3 md:py-2'>
            See Kanthariya in Action
            <h1>Contact us to see how simple talent operations can be .<p></p>
                From sourcing and compliance to onboarding and <p></p>
                payments, Kanthariya has you covered.
            </h1>
         </div>
         <div>image</div>
      </div>
    </div>
  )
}

export default Contact
