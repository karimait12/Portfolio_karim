import React, { useEffect } from 'react'
import logo from '../../assets/mylogo.png'
const Header =()=> {

 

useEffect(()=>{


},[])






  return (
    <header className="p-1 border-b-2 border-gray-100">
    <div className="container mx-auto  flex justify-center md:justify-between  items-center flex-wrap">
      <div className="text-white font-bold text-lg">
        <img
          src={logo} // Replace with the actual path to your logo image
          alt="Logo"
          className="h-auto w-24"
        />
      </div>
      <nav className="mx-1 md:space-x-24 space-x-10 p-2 flex flex-wrap items-center justify-end"> {/* Centering the navigation links */}
      
        <a href="#about" className="text-stone-600 mt-5 md:mt-0 font-medium md:text-lg hover:text-violet-600">
          About
        </a>
        <a href="#projets" className="text-stone-600 mt-5 md:mt-0 font-normal md:text-lg hover:text-violet-600">
          Projects
        </a>

        <a href="#Testimonials" className="text-stone-600 mt-5 md:mt-0 font-normal md:text-lg hover:text-violet-600">
          Testimonials
        </a>

        <a href="#Technologies" className="text-stone-600 mt-5 md:mt-0 font-normal md:text-lg hover:text-violet-600">
        Knowledges
        </a>
        
        <a className="bg-blue-500 hover:bg-blue-700 cursor-pointer mt-5 md:mt-1  text-white text-sm  md:text-md font-normal py-2 px-5 rounded-full">
        Contact me
       </a>

      </nav>
    </div>
  </header>
  )
}

export default Header