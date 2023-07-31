/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import Profile from '../profile/Profile';
import { deepOrange } from '@mui/material/colors';

function Header({handleMenu}) {
  const [toggle,setToggle]=useState(false);
  
  const handleToggle=()=>{
    setToggle(!toggle);
  };
  
  return (
    <div className='h-16 shadow-sm flex justify-between relative'>
      <div className='h-16 flex justify-between pt-5 pl-4'>
        <div className='cursor-pointer' onClick={handleMenu}><MenuIcon/></div>
        <div className='flex pl-8'>
          <SearchIcon/>
          <div className='pl-3'><input id='search' size={'50'} name='search' placeholder='search here...'/></div>
        </div>
      </div>
      <div className='h-16 w-[330px] flex justify-around pt-5 pr-5'>
        <div className='flex'><GroupAddIcon/><pre> INVITE TEAM MEMBERS</pre></div>
        <NotificationsNoneOutlinedIcon/>
        <div className='pt-[-40px] cursor-pointer' onClick={()=>{handleToggle();}} >
          <Avatar
            sx={{ bgcolor: deepOrange[300], height:30, width:30}}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
        S
          </Avatar>
          {toggle? <Profile/>:null}
        </div>
      </div>
    </div>

  );
}

export default Header;