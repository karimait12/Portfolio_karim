import { useState } from 'react'


import { SocialIcon } from 'react-social-icons'
import so from '../../assets/so.png'
function Hero() {
  

  return (
    <div className='mt-5 md:mt-20 border-b-2 border-gray-200 p-4 pb-11 md:p-28 md:pb-64 flex justify-around items-center flex-wrap-reverse'>
       
       <div className=''>
        <h1 className=' text-4xl text-center md:text-7xl md:text-left text-blue-950'>Hi , I' m Soufiane</h1>
        <h2 className='mt-3 text-3xl text-center md:text-left md:text-6xl text-blue-500'>Web and Mobile Developper</h2>
       <p className='text-sm mb-0 text-center md:text-left md:text-lg mt-3 md:mb-2 w-4/4 md:w-3/4 font-light'>Experienced Full Stack Developer passionate about bringing ideas to life through code. Skilled
in front-end and back-end technologies.
</p> 
<div className='mt-5 text-center md:mt-6 md:text-left '>
<a  className="  md:ml-0 bg-violet-900 hover:bg-purple-950 cursor-pointer   text-white text-sm  md:text-2xl font-normal py-2 px-7 rounded-lg">
        Hire me
       </a>
       </div>
       
       <div className='mt-4 text-center md:mt-6 md:text-left '>
       <SocialIcon url="https://web.facebook.com/soufianski2001" />
       <SocialIcon className='ml-3' url="https://github.com/soufiane2001" />
       <SocialIcon className='ml-3' url="https://www.youtube.com/channel/UC8_8AXAR2sUen-q1rjVKiAQ" />
       </div>
       </div>
       <div className='w-44 md:w-72 flex justify-around '>
        <img src={so}  className=' w-screen ' />
       </div>

    </div>
  )
}

export default Hero
