import React from 'react'

import boot from '../../assets/Bootstrap.png'
import css from '../../assets/CSS.png'
import expo from '../../assets/expo.png'
import fire from '../../assets/fire.png'
import html from '../../assets/html.png'
import js from '../../assets/JavaScript.png'
import jq from '../../assets/jq.png'
import mysql from '../../assets/MySQL.png'
import tlw from '../../assets/tailwind.png'
import lar from '../../assets/Laravel.png'
import react from '../../assets/react.png'
import next from '../../assets/nextjs.png'
import php from '../../assets/php.png'
import ajax from '../../assets/ajax.png'
import mui from '../../assets/mui.png'
function Knowldge() {

    var Knowldge=[html,css,boot,js,jq,mui,ajax,react,next,tlw,expo,php,lar,fire,mysql]

  return (
    <div id='Technologies' className='mt-5  md:mt-20 border-b-2  border-gray-200 p-4 pb-11 md:px-20 md:pb-64'>
        <h1 className=' text-center font-medium text-xl md:text-3xl text-blue-600'>Knowledges</h1>
        <div className=" mt-9 md:mt-16 flex justify-around flex-wrap px-10  md:px-52">
             {
                Knowldge.map((x)=>{
                    return(
                        <div className="mt-8   md:mt-28 w-20 md:w-60 h-32 flex flex-col   justify-around items-center" >
    <img  src={x} className='w-36' alt=""  />
   </div>

                    )
                })
             }

        </div>
        
        
        
    </div>
  )
}

export default Knowldge