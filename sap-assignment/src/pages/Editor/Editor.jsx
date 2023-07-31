/* eslint-disable react/prop-types */
import React from 'react';
import Hamburger from '../../components/hamburger/Hamburger';
import Notepad from '../../components/notepad/Notepad';

function Editor({menu}) {
  return (
    <div className='border-2 border-red-300 flex h-screen'>
      <div className='border-2 border-red-300 w-1/4' style={{display:menu?'block':'none'}}><Hamburger/></div>
      <div className={`border-2 border-red-300 ${menu? 'w-3/4':'w-1'}`}><Notepad/></div>
    </div>
  );
}

export default Editor;