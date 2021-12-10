import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Switch } from '@mui/material';
import { BellIcon, SearchIcon } from '@heroicons/react/outline';
import Country from '../components/country'
function dashboard() {
    let countries=[];
    return (
        <div className="home min-h-screen py-2 px-5">
             <Head>
                <title>BAG Coding  Challenge</title>
                <link rel="icon" href="/favicon.ico" />
             </Head>
             <div className="min-h-screen flex">
                <div className="border-r border-gray-200 pr-20">
                    <div className="mb-6"><h1 className="font-bold text-xl">BAG</h1></div>
                    <ul className="">
                        <li className="pb-3"><Link href="/dashboard/"><a>MyList</a></Link></li>
                        <li className="pb-3"><Link href="/dashboard/?status=visited"><a>Visited</a></Link></li>
                        <li className="pb-3"><Link href="/dashboard/?status=tovisit"><a>ToVisit</a></Link></li>
                    </ul>
                </div>
                <div className="pl-10 w-full">
                    {/* Header */}
                    <div className="dashboard-head flex justify-between items-center py-5">
                        <div className="font-bold text-xl uppercase"><h1>My List</h1></div>
                        <div className="flex justify-evenly items-center">
                            <div>Darkmode <Switch onChange={(e)=>{
                                    if(e.target.checked==true){
                                    document.querySelector('.home').style.backgroundColor='black';
                                    document.querySelector('.home').style.color='white';
                                    }
                                    else{

                                        document.querySelector('.home').style.backgroundColor='white';
                                        document.querySelector('.home').style.color='black';
                                    }
                                }} className="h-2"/>
                            </div>
                            <div><BellIcon className="h-5 w-5 rounded-xl bg-gray-400 "/></div>
                            <div><h2>Hey,</h2></div>
                            <div><img className="h-5 w-5"/></div>
                        </div>
                    </div>
                    {/* Search and filter */}
                    <div className="search-and-filter flex justify-between">
                        <div className="relative mt-1 p-3 rounded-md">
                            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-500"/>
                            </div>
                            <input type="text" placeholder="Search for a country ..." className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-lg"/>
                        </div>
                        <div>
                            <select className="bg-gray-50 px-10 w-full rounded-lg">
                                <option value="" selected disabled>Filter by region</option>
                                <option value="africa">Africa</option>
                                <option value="america">America</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="ocean">Oceania</option>
                            </select>
                        </div>
                    </div>
                    {/* body where flags will be shown */}
                    <div className="flex items-center justify-between">
                      
                        {   
                        
                            fetch('https://restcountries.com/v3.1/all')
                            .then(response=>response.json())
                            .then(data=> countries=data)
                            .catch(error=>console.log(error))
                            
                         } 
                         {

                            countries.map(country=>{
                                return <Country imgsrc={country.flags.png}  country={country.name.common} population={country.population} capital={country.capital[0]} currency={country.currencies[0].symbol}/>;
                            })
                        }
                    </div>
                </div>
           </div>
        </div>
    )
}

export default dashboard;
