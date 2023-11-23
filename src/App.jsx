import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoNotificationsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";


export default function App() {
  return (
    <>
    <header className='text-white h-20 w-full flex flex-row justify-around items-center gap-[20px] mt-5'>
      <div className='flex flex-row items-center gap-10'>
        <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center'>
          <p>LOGO</p>
        </div>
        <p>Discord</p>
        <p>Leaderboard</p>
      </div>

      <div className='flex flex-row items-center gap-2 bg-search rounded-lg'>
          <input type="text" placeholder='Search' className='w-[400px] pl-4 h-[48px] rounded-lg bg-search' />
          <div className='w-[48px] h-[48px] bg-search rounded-lg flex justify-center items-center'>
           <CiSearch className='w-[30px] h-[30px] bg-search'/> 
          </div>
        </div>
      <div className='flex flex-row items-center gap-4'>
       <IoNotificationsOutline className='w-[35px] h-[35px]' />
       <CiUser className='w-[35px] h-[35px]'/>
      </div>
    </header>
    <div className='flex flex-row items-center justify-between mt-[25px] px-[100px]'>
      <div>
        <p className='font-bold text-3xl'>Web3 Dao</p>
        <p>Referral Leaderboard</p>
      </div>
      <div className='flex flex-row items-center w-[485px] h-[66px] gap-4'>
        <button className='w-[221px] h-[66px] bg-white flex flex-row items-center text-black justify-center'>All time</button>
        <select className='w-[221px] h-[66px] bg-red-500 flex flex-row items-center justify-center px-10' defaultValue="all">
          <option value="all">All time</option>
          <option value="daily">Daily</option>
        </select>
      </div>
    </div>
    </>
  )
}