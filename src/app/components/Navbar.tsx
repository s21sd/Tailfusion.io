"use client";
import React, { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { ModeToggle } from '../utils/ToggleMode';
import { CiHeart } from "react-icons/ci";
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import { NavigationMenuDemo } from '@/components/Blocks/NavigationContainer';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { SearchBox } from '@/components/Blocks/SearchBox';
import { Headingwords } from '@/components/Blocks/Headingwords';
import lightlogo from '@/assets/llogo.png';
import darklogo from '@/assets/dlogo.png';

const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const handleClick = () => {
    window.location.href = "https://github.com/s21sd/Tailfusion.io";
  };

  const toggleDrawer = () => {

    setIsDrawerOpen(!isDrawerOpen);
  };


  return (

    <div className="body-font main_heading">

      <div className="mx-auto flex p-5 md:flex-row items-center justify-between">
        {/* Logo / Heading will add this further */}
        {/* <Image
          src={getTheValOfTheme()}
          alt='logo'
          className='object-contain mr-2'
          width={50}
          height={50}
          style={{ imageRendering: 'crisp-edges' }}
        /> */}
        <div className="flex items-center">
          <div className="text-2xl hidden sm:block cursor-pointer" onClick={() => router.push('/')}>
            <Headingwords />
          </div>
          <div className="font-display block sm:hidden text-center text-2xl font-bold tracking-wide text-[#fff2c1] main_heading cursor-pointer" onClick={() => router.push('/')}>
            <h1>{"<TF />"}</h1>
          </div>
        </div>
        {/* Navigation for Desktop */}
        <div className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 flex-wrap items-center text-base justify-center sec_heading text-gray-400">
          <NavigationMenuDemo />
        </div>

        <div className='flex items-center gap-4'>
          <div className='hidden md:block'>
            <SearchBox />
          </div>
          {/* <div className='hidden sm:block'>
            <CiHeart className='git_icon_color cursor-pointer' size={40} />
          </div> */}
          <div className='flex items-center gap-3 '>
            <div onClick={handleClick}>
              <FaGithub className='git_icon_color cursor-pointer hidden sm:block' size={38} />
            </div>
            <ModeToggle />
          </div>
          <div className="block md:hidden">
            <IconButton onClick={toggleDrawer}>
              <Hamburger color='#ffffff' toggled={isDrawerOpen} toggle={setIsDrawerOpen} />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile Navigation */}
      <Drawer open={isDrawerOpen} anchor="right" onClose={toggleDrawer}>
        <div className="p-4 w-64">
          <NavigationMenuDemo />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
