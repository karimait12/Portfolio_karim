import { useState } from 'react'

import { SocialIcon } from 'react-social-icons'



import so2 from '../../assets/so2.png'
function About() {
  

  return (
    <div id='about' className='mt-5  md:mt-20 border-b-2  border-gray-200 p-4 pb-11 md:px-20 md:pb-64 flex justify-around items-center   flex-wrap'>
       
       <div className='w-60  md:w-1/3 flex justify-around '>
        <img src={so2}  className=' w-screen ' />
       </div>

         
        <div className='w-3/4 text-center md:w-2/4 md:text-left '>
            <h1 className=' text-xl text-cyan-600  md:text-4xl md:font-light'>About me</h1>
            <h2 className='mt-1 text-xl  text-blue-950 md:text-4xl md:font-light'>More Than 3+ Years Programming Experienced</h2>
            <p className='mt-3 text-gray-700'>I am Soufiane Full Stack Developper I am an award-winning full-stack web developer and UI/UX javascript specialist. Check out my articles, React and React Native components at the code laboratory. Feel free to take a look at my latest projects on the web portfolio page.</p>
             <ul className='mt-3'>
                <li className=' text-lg'>Name : Soufiane Boutatss</li>
                <li className=' text-lg'>Email : Sboutatss@gmail.com</li>
                <li className=' text-lg'>Location : Maroc , Casablanca , Lot Nassim 259</li>
                <li className=' text-lg'>Office : Anfa</li>
                
                <a href={'devcv.pdf'} target='_blank'  className="flex w-40 ml-32 md:ml-0 justify-center rounded-md bg-indigo-600 px-2 py-3 mt-6 text-xl font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download cv</a>
             </ul>

        </div>


    </div>
  )
}

export default About
