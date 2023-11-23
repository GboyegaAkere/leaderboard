import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoNotificationsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Gold from "../src/assets/images/Gold.png"


export default function App() {
  return (
    <>
    <header className='text-white h-20 w-full flex flex-row justify-around items-center gap-[20px] mt-5'>
      <div className='flex flex-row items-center gap-10'>
        <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center'>
          <p>LOGO</p>
        </div>
        <p>Home</p>
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

    <div className="mt-10">
      <table className="w-full bg-white border-collapse ml-[100px]">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 p-3 text-left">Rank</th>
            <th className="border-b-2 border-gray-300 p-3 text-left">Username</th>
            <th className="border-b-2 border-gray-300 p-3 text-left">Invite Count</th>
            <th className="border-b-2 border-gray-300 p-3 text-left">Token Rewarded</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-gray-300 p-3 text-left"><img src={Gold} alt="" /></td>
            <td className="border-b border-gray-300 p-3 text-left">Gboyega</td>
            <td className="border-b border-gray-300 p-3 text-left"></td>
            <td className="border-b border-gray-300 p-3 text-left"></td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    </>
  )
}