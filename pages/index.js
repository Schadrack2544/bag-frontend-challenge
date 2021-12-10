import Head from 'next/head';
import Link from 'next/link';
// import {useState} 'next/state';
// import SwitchUnstyled from '@mui/base/SwitchUnstyled';
import { Switch } from '@mui/material';
import {UserIcon,LockClosedIcon} from '@heroicons/react/outline';
export default function Home() {
 
 let isToggled=false;
  return (
    <div className="home min-h-screen py-2 px-5">
      <Head>
        <title>BAG Coding  Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header flex flex-row justify-between ">
        <div><h1 className="font-bold text-3xl">BAG</h1></div>
        <div>Dark Mode <Switch  onChange={(e)=>{
            if(e.target.checked==true){
              document.querySelector('.home').style.backgroundColor="black";
              document.querySelector('.home').style.color="white";
            }
            else{
              document.querySelector('.home').style.backgroundColor="white";
              document.querySelector('.home').style.color="black";
            }
          }}/></div>
        <div><button className="bg-red-600"><Link href="/register"><a>Register</a></Link></button></div>
      </div>

      <div className="mx-auto my-20 w-1/3">
        <h1 className="text-2xl font-bold">Log in</h1><br/>

       <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="h-5 w-5"/>
          </div>
         <input type="text" placeholder="Enter your username" className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-lg"/>
         {/* <br/><br/> */}
      </div>

       <div className="relative mt-1 p-3 rounded-md">
         <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
           <LockClosedIcon className="h-5 w-5"/>
         </div>
         <input type="text" placeholder="Enter your password" className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-lg"/>
       </div>
         {/* <br/><br/> */}
        <div>
          <button className="bg-red-600 text-white font-bold rounded-2xl w-1/5 border border-black p-1"> Log in</button> new here!? <Link href="/register" className="text-red-600"><a>Register</a></Link></div></div>
    </div>
  )
}
 