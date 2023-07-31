/* eslint-disable react/prop-types */
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// eslint-disable-next-line no-unused-vars
function Hamburger() {
  return (
    <div>
      <div className='flex justify-between shadow-lg h-8'>
        <div></div>
        <div className='pr-4 flex gap-4'>
          <AddOutlinedIcon style={{ color: 'red' }} />
          <UnfoldLessIcon />
          <KeyboardDoubleArrowLeftIcon/></div>
      </div>
      <div></div>
    </div>
  );
}

export default Hamburger;