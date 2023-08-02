/* eslint-disable react/prop-types */
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Folder from '../folder/folder';

function Hamburger({handleInsertNode,exporerData,setFileId}) {
  return (
    <div>
      <div className='flex justify-between shadow-lg h-8'>
        <div></div>
        <div className='pr-4 flex gap-4'>
          <AddOutlinedIcon style={{ color: 'red' }} />
          <UnfoldLessIcon />
          <KeyboardDoubleArrowLeftIcon /></div>
      </div>
      <div>
        <Folder explorerData={exporerData} handleInsertNode={handleInsertNode} setFileId={setFileId}/>
      </div>
    </div>
  );
}

export default Hamburger;