"use server"
import React, { useState } from 'react'
import soufmarket from '../../assets/soufmarket.png';
import aji from '../../assets/ajinkriw.png'
import ily from '../../assets/ily.png'
import chatapp from '../../assets/chatapp.jpg'
import eco from '../../assets/ecommerce.jpg'
import cashapp from '../../assets/cashapp.jpeg'
import foot from '../../assets/foot.png'
import { SocialIcon } from 'react-social-icons'
function Projects() {

    var [categorie,setcat]=useState('All');


    var projects=[{img:cashapp,title:'cash App',description:'Elevate your financial management with our Expo CLI-driven cash management app. Seamlessly monitor expenses, track income, and maintain control of your finances. Simplify cash flow tracking for informed decision-making, all in one intuitive platform designed to empower your financial journey.'
    ,links:['https://github.com/soufiane2001/CashAppExpoApp/tree/main/cashapp/cashapp'],
techs:['#expo','#reactnative',"#expo"],type:"mobile"},{img:eco,title:'ecommerce cash on delivery plateform',description:'real-time chat web app using React and Firebase involves combining the front-end library React with the Firebase platform for real-time data synchronization '
    ,links:['https://www.youtube.com/watch?v=gj7IWaDnEXI&t=184s'],type:"web",
techs:['#mysql','#reactjs',"#bootstrap","#php"]},{img:aji,title:'Ajinkriw',description:'Front end of mobile app of rent '
    ,links:['https://github.com/soufiane2001/Ajinkriw','https://www.youtube.com/watch?v=UVQUKwiEO0Q&t=1s'],
techs:['#expo','#axios','#reactnative'],type:"mobile"},
{img:soufmarket,title:'Soufmarket',description:'marketplace platforme to buy and sell'
    ,links:['https://github.com/soufiane2001/Marketplace','https://www.youtube.com/watch?v=tq9h_W0ZTQc'],
techs:['#php','#laravel','#livewire','#mysql'],type:"web"},



{img:ily,title:'Ilyass adventure',description:'game 2d adventure and comedy'
    ,links:['https://github.com/soufiane2001/game2dmobile','https://www.youtube.com/watch?v=UVQUKwiEO0Q&t=1s'],
techs:['#expo','#reactnative'],type:"mobile"}
,
{img:chatapp,title:'Realtime Chat Web App',description:'real-time chat web app using React and Firebase involves combining the front-end library React with the Firebase platform for real-time data synchronization '
    ,links:['https://github.com/soufiane2001/Chatdeveloppers','https://www.youtube.com/watch?v=l60Xb16u7W8'],
techs:['#firebase','#reactjs',"#bootstrap"],type:"web"},

{img:foot,title:'Casafoot mobile App',description:''
    ,links:['https://github.com/soufiane2001/Chatdeveloppers','https://www.youtube.com/watch?v=l60Xb16u7W8'],
techs:['#php','#reactnative',"#tailwind","#laravel","#mysql"],type:"mobile"},



];


  return (
    <div id='projets' className='mt-5  md:mt-20 border-b-2  border-gray-200 p-4 pb-11 md:px-20 md:pb-64'>
         <h1 className=' text-center font-medium text-xl md:text-3xl text-blue-600'>Projects</h1>
        <div className='mt-5 flex justify-center flex-wrap'>
             <h2 onClick={()=>{setcat("All")}} className=' border-2 px-6 rounded-xl ml-7 mr-4 cursor-pointer hover:bg-indigo-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>All</h2>
             <h2 onClick={()=>{setcat("web")}} className=' border-2 px-6 rounded-xl mr-4 cursor-pointer hover:bg-indigo-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Web</h2>
             <h2 onClick={()=>{setcat("mobile")}} className=' border-2 px-6 rounded-xl mr-4 cursor-pointer hover:bg-indigo-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Mobile</h2>
        </div>
        
         <div className=" mt-9 md:mt-16 flex justify-around flex-wrap px-10  md:px-52"> 
        {categorie=="All" && projects.map((x)=>{return(
            <div className="max-w-sm rounded overflow-hidden shadow-lg self-start mt-5">
              
               <img
        src={x.img} 
        alt="Description of the image"
        width={500}

      />
                 <div className="px-6 py-4">
                   <div className="font-bold md:text-xl text-md mb-2">{x.title}</div>
                        <p className="text-gray-700 text-base">
                               {x.description}
                        </p>
                    </div>
                  
                <div className='mt-1 text-center'>
                    {x.links.map((y)=>{return(
                       <>
                      <SocialIcon className='ml-3' url={y}/>
                       </>
                    )})}   
              </div>   
                 <div className="px-6 pt-4 pb-2">
                 {x.techs.map((z)=>{return(
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {z}
                        </span>
                      
                        )})}   
                        </div>
             </div>
        )})}






         
{categorie=="web" && projects.map((x)=>{if(x.type=="web")return(
            <div className="max-w-sm rounded overflow-hidden shadow-lg self-start mt-5">
              
               <img
        src={x.img} 
        alt="Description of the image"
        width={500}

      />
                 <div className="px-6 py-4">
                   <div className="font-bold md:text-xl text-md mb-2">{x.title}</div>
                        <p className="text-gray-700 text-base">
                               {x.description}
                        </p>
                    </div>
                  
                <div className='mt-1 text-center'>
                    {x.links.map((y)=>{return(
                       <>
                      <SocialIcon className='ml-3' url={y}/>
                       </>
                    )})}   
              </div>   
                 <div className="px-6 pt-4 pb-2">
                 {x.techs.map((z)=>{return(
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {z}
                        </span>
                      
                        )})}   
                        </div>
             </div>
        )})}





    
{categorie=="mobile" && projects.map((x)=>{if(x.type=="mobile")return(
            <div className="max-w-sm rounded overflow-hidden shadow-lg self-start mt-5">
              
               <img
        src={x.img} 
        alt="Description of the image"
        width={500}

      />
                 <div className="px-6 py-4">
                   <div className="font-bold md:text-xl text-md mb-2">{x.title}</div>
                        <p className="text-gray-700 text-base">
                               {x.description}
                        </p>
                    </div>
                  
                <div className='mt-1 text-center'>
                    {x.links.map((y)=>{return(
                       <>
                      <SocialIcon className='ml-3' url={y}/>
                       </>
                    )})}   
              </div>   
                 <div className="px-6 pt-4 pb-2">
                 {x.techs.map((z)=>{return(
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {z}
                        </span>
                      
                        )})}   
                        </div>
             </div>
        )})}



          
          </div>

    </div>
  )
}

export default Projects
