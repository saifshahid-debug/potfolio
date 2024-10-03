import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
const Navbar = () => {
    const [menu,setMenu] = useState(false)
    const navItems = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contacts"
        }
    ]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0  z-50 bg-yellow-300">
      <div className='flex justify-between h-16 items-center'>
      <div className='flex space-x-2'>
        <img src="my.jpg" className='h-12 w-12 rounded-full' alt="not found"  />
        <h1 className='font-semibold text-xl cursor-pointer'>M.SAI<span className='text-green-500 text-2xl'>F shahid.</span>
        <p className='text-sm'><span className='text-green-500'>W</span>eb developer</p>
        </h1>
      </div>
      {/* DESKTOP */}
      <div>
        <ul className='hidden md:flex space-x-8'>
            {
                navItems.map(({id,text})=>(
                <li  className='hover:scale-125 duration-200 cursor-pointer ' key={id}>
                      <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                    </li>
                ))
            }
        </ul>
        <div onClick={() => setMenu(!menu)} className='md:hidden'>
        {menu? <MdClose size={24}/>
          
            :<FiMenu size={24} />
            }
        </div>
      </div>
      </div>

      {/* mobile navbar */}
      {
        menu &&(
            <div className='bg-white'>
      <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 '>
      {
                navItems.map(({id,text})=>(
                <li key={id} className='hover:scale-125 duration-200 cursor-pointer font-semibold text-2xl'>
                     <Link 
                     onClick={() => setMenu(!menu)} 
                     to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                     </li>
                ))
            }
          
        </ul>

      </div>

        )
      }
      


    </div>
    </>
  )
}

export default Navbar
