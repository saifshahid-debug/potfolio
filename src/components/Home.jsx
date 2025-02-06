import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaSkype } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
    <div name = "Home"
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
      <span className='text-xl'>Discover What I Do</span>
      <div className='flex space-x-1 text-2xl md:text-4xl'>
      <h1>Hello, I'am a </h1>
      {/* <span className='text-green-700 font-bold'>Developer</span> */}
      <ReactTyped
          className='text-green-700 font-bold'
          strings={["Developer...","programer...","coder..."]}
          typeSpeed={100}
          loop={true}
        />
      </div>
      <br />
      <p className='text-sm md:text-md text-justify'>My name is saif shahid and iam a graduated software engineer.I developed a strong foundation in Object-Oriented 
      Programming, and Database Management Systems. I have practical experience in frontend development, having created various projects
      My goal is to become a proficient senior 
      software developer specializing in the MERN stack.</p>
      <br />
      {/* social media */}
      <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 justify-between'>
      <div className='space-y-2'>
        <h1 className='font-bold'>Available on :)</h1>
        <ul className='flex space-x-2'>
            <li>
                <a href="https://www.facebook.com/" target='_blank'>
                <ImFacebook2 className='text-2xl cursor-pointer '/>
                </a>
                </li>
            <li>
                <a href="https://www.linkedin.com/in/saif-shahid-5a82482b8/" target='_blank'>
                < SiLinkedin className='text-2xl cursor-pointer'/>
                </a></li>
            <li>
                <a href="https://join.skype.com/invite/vPMAiInuFxRb" target='_blank'>
                <FaSkype className='text-2xl cursor-pointer'/>
                </a></li>
        </ul>
      </div>
      <div className='space-y-2'>
      <h1 className='font-bold'>working on...</h1>
        <ul className='flex space-x-2'>
            <li><SiTailwindcss className='hover:scale-110 duration-200 rounded-full border-[2px] text-xl md:text-3xl cursor-pointer'/></li>
            <li><FaJs  className='hover:scale-110 duration-200 rounded-full border-[2px] text-xl md:text-3xl cursor-pointer'/></li>
            <li><GrReactjs className='hover:scale-110 duration-200 rounded-full border-[2px] text-xl md:text-3xl cursor-pointer'/></li>
            <li><FaNodeJs  className='hover:scale-110 duration-200 rounded-full border-[2px] text-xl md:text-3xl cursor-pointer'/></li>
        </ul>
      </div>
      </div>
      </div>
      <div className='md:w-1/2 md:ml-40  md:mt-16 mt-8 order-1'>
      <img src="graduate.jpg" className='rounded-full w-[450px] h-[450px] ' alt="not found"  />
      </div>
      </div>
      <div className='relative z-10 mt-4'>
       <a href="mycv-SaifShahid (2)" target='_blank'> <button className='bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg border-2 border-black-600 hover:bg-white hover:text-green-600 transition duration-300 ease-in-out hover:border-green-600 shadow-lg hover:shadow-2xl transform hover:scale-105"'>Download Resume</button></a>
    </div>
    </div>
    
    <hr />
    </>
  )
}

export default Home
