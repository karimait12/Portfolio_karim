
import { useState } from 'react'

import { SocialIcon } from 'react-social-icons';

import { onValue, push, ref, set } from 'firebase/database'; 
import { collection,addDoc, where, getDocs, query, updateDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";
import { useEffect } from 'react'

function Testimonials() {
  var [users,setusers]=useState([])
  var [prenom,setPrenom]=useState("")
  var [message,setMessage]=useState("")


  const firebaseConfig = {
    apiKey: "AIzaSyAgOf0wFlOSREp8aOdrzxADjZrlHkkiiyg",
    authDomain: "portfolio-6de12.firebaseapp.com",
    databaseURL: "https://portfolio-6de12-default-rtdb.firebaseio.com",
    projectId: "portfolio-6de12",
    storageBucket: "portfolio-6de12.appspot.com",
    messagingSenderId: "647070473063",
    appId: "1:647070473063:web:f803c4e8e5b9fc91bbadc2"
  };
  

  const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
  const addData = async () => { 
     
    const newItemRef = push(ref(db, 'users'));
    if(prenom.length>2 && message.length>5){
    set(newItemRef, {prenom:prenom,message:message})
    setPrenom('');
    setMessage('');
    }
  };


  const getdata=async()=>{
    const query = ref(db, `users`);
    return await onValue(query, (snapshot) => {
       const data = snapshot.val();
      setusers(Object.values(data))

    })


  }

useEffect(()=>{getdata()},[])



  return (
    <div id='Testimonials' className='mt-5  md:mt-20 border-b-2  border-gray-200 p-4 pb-11 md:px-20 md:pb-64'>
    <h1 className=' text-center font-medium text-xl md:text-3xl text-blue-600'>Testimonials</h1>
    

    <div className='flex justify-center mt-4'>
      <input placeholder="Your name" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}} className=" max-w-lg bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
      </div>

    
    <div className='flex justify-center flex-wrap mt-3 '>
      
<textarea id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}  rows={4} className="block  p-2.5 w-5/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

</div>
<div className='flex justify-center flex-wrap mt-3 '>
<button onClick={()=>{addData()}} className="bg-transparent w-2/5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  SEND
</button>
</div>




    <div className=" mt-9 md:mt-16 flex justify-around flex-wrap px-10  md:px-52"> 
   
           
              
            {users.length>0 && users.map((x)=>{
              return( <div className="max-w-sm rounded  overflow-hidden shadow-lg self-start mt-5">
                 <div className="px-6 py-4">
                   <div className="font-bold md:text-xl text-md mb-2">{x.prenom}</div>
                        <p className="text-gray-700 text-base">
                         {x.message}
                        </p>
                    </div></div>
)})}     
              
             
             </div>
  


         
    


    </div>
  )
}

export default Testimonials
