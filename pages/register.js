import Head from 'next/head';
import Link from 'next/link';
// import {useState} 'next/state';
// import SwitchUnstyled from '@mui/base/SwitchUnstyled';
import { Switch } from '@mui/material';
import {UserIcon,LockClosedIcon} from '@heroicons/react/outline';

function register() {
    
    return (
        <div className="home min-h-screen py-2 px-5">
        <Head>
          <title>BAG Coding  Challenge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="header flex flex-row justify-between ">
          <div><h1 className="font-bold text-3xl">BAG</h1></div>
          <div>Dark Mode<Switch  onChange={(e)=>{
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
          <h1 className="text-2xl font-bold">Register</h1><br/>
  
         <div className="">
           <div className="">
                <UserIcon className="h-8 w-8"/>
           </div>
           <input placeholder="Enter your username" className="form-control min-w-full border p-2"/>
         <br/><br/>
         </div>
         <div>
           <LockClosedIcon className="h-8 w-8"/>
           <input placeholder="Enter your password" className="form-control min-w-full border p-2"/>
           </div>
           <br/><br/>
            <div>
              <button className="bg-red-600 text-white font-bold rounded-2xl w-1/5 border border-black p-2">Register</button>
              Already have an account!? 
              <Link href="/" className="text-red-600"><a>Login</a></Link>
            </div>
          </div>
      </div>
    )
}

export default register;
