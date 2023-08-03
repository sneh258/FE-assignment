import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import './profile.css';

function Profile() {
  return (
    <div className='profile h-fit w-[200px]'>
      <ul className='p-4'>
        <li>Dark Mode</li>
        <li>Profile</li>
        <li>What&apos;s new &nbsp;&nbsp;<CircleIcon style={{ color: 'blue' , height:'10px', width:'10px', marginBottom:'3px'}}/></li>
        <li>Help</li>
        <li>Send feedback</li>
        <li>Hints & Shortcuts</li>
        <hr/>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Profile;