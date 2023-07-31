import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function Navbar() {

  return (
    <div className='h-16 flex justify-between shadow-inner'>
      <div className=' w-[300px] flex'>
        <ul className='flex gap-6 p-4 pt-6 cursor-pointer'>
          <li className='border-b-2 border-red-500 border-solid pt-0 pb-2.5 px-[5px]'><a>All</a></li>
          <li><a>Board</a></li>
          <li><a>Graph</a></li>
          <li><a>Recent</a></li>
        </ul>
        <div className='p-4 pt-6'><MoreVertOutlinedIcon /></div>
      </div>
    </div>
  );
}
