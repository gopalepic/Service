import Navbar from '../components/Navbar/Navbar'
import image from '../assets/website/aboutus.jpeg'
import Footer from '../components/Footer/Footer'
const About = () => {
    const Aboutus = [
        {
            title:"",
            para:"Welcome to Kanthariya Technologies, your trusted partner in IT solutions and services since 2020. As a proud member of the expansive Kanthariya Group, we are dedicated to delivering excellence and innovation across various industries, including textiles, mills, and automobiles."
        },
        {
            title:"Our Jounery",
            para:" Founded in 2020, Kanthariya Technologies has quickly risen to become a leader in the IT sector. Our commitment to quality, customer satisfaction, and affordability sets us apart from the competition. We leverage the collective strength and expertise of the Kanthariya Group to provide robust and scalable IT solutions that meet the evolving needs of businesses worldwide."
        },
        {
            title:"Our Services",
            para: <p>At Kanthariya Technologies, we offer a comprehensive range of IT services designed to optimize your business operations and drive growth  <br/>
             Our services include:
              <br/>
             <b>1) Custom Software Development</b> : Tailored solutions that fit your unique business requirements.<br/>
             <b>2) IT Consulting:</b> Expert advice to help you navigate the complexities of the digital landscape.<br />
            <b>3) Managed IT Services:</b>  End-to-end management of your IT infrastructure to ensure seamless performance.<br />
           <b>4) Cloud Solutions:</b> Scalable and secure cloud services that enhance flexibility and efficiency.<br />
           <b>5)Cybersecurity:</b> Robust security measures to protect your data and IT assets.
  </p>
  
   },
        
        {
            title:"Why Choose Us",
            para:" Affordable Pricing: We believe that cutting-edge technology should be accessible to all businesses. That's why we offer the best IT solutions at the most competitive prices.Quality Service: Our team of skilled professionals is dedicated to delivering top-notch service that exceeds your expectations.Customer-Centric Approach: Your satisfaction is our priority. We work closely with you to understand your needs and provide customized solutions that drive results.Innovation: We stay ahead of industry trends to bring you the latest and most effective technologies. "
        },
        {
            title:"Our Vision",
            para:"At Kanthariya Technologies, our vision is to empower businesses with innovative IT solutions that foster growth and success. We strive to be a global leader in the IT industry, recognized for our commitment to excellence, integrity, and customer satisfaction."
        },
        {
            title:"Join Us",
            para:"Join the many businesses that have benefited from our expertise and experience. Let Kanthariya Technologies be your partner in achieving technological excellence and business success. Contact us today to learn more about how we can help your business thrive."
        },
    ]
  return (
    <div className=''>
        <div><Navbar></Navbar></div>
   
    <div className='flex flex-col justify-between dark:bg-gray-950 dark:text-white duration-300  p-10'>
   
    <div className='text-4xl text-center text-primary'><b>About Us</b></div>

        <div >
          {
            Aboutus.map(({title,para}) => (
               <div className='bg-black border m-4 rounded-xl dark:bg-gray-950 dark:text-white duration-300  p-2'> 
                <div className='text-3xl text-primary dark:bg-gray-950 dark:text-white duration-300 '><b>{title}</b></div>
                <>{para}</>
               
                </div>
            ))
          }  </div>
    </div>
    <Footer></Footer>
     </div>
  )
}

export default About
