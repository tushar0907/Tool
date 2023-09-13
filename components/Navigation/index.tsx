import React from 'react';
import { GiLion as GiLionIcon } from 'react-icons/gi';
import {FiSearch as Searchicon} from "react-icons/fi";
import {BsCartFill as Cart} from "react-icons/bs";
import {CgProfile as Profile} from "react-icons/cg";

const Navigation = () => {
  return (
    <div className='flex w-[95%] justify-between h-16 px-6 border-b border-white'>
        <div className="flex flex-1">
            <div className="flex h-full w-[7%] items-center"><GiLionIcon /></div>
            <div className="flex h-full w-[40%] font-medium items-center justify-around">
                <p>Menu</p>
                <p>Home</p>
                <p>About</p>
                <p>Help</p>
            </div>
        </div>
        <div className="flex flex-1 h-full items-center justify-end"> 
        <div className="flex w-[15%] h-full items-center justify-around">
        <p><Searchicon /></p>
        <p><Cart /></p>
        <p><Profile /></p>
        </div>
        </div>
    </div>
  )
}

export default Navigation