import React ,{useState} from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Proptypes from 'prop-types';
import Folder from '../folder/folder';

function Hamburger({ handleInsertNode, exporerData, setFileId }) {
  const [isActive,setIsActive]=useState(-1);
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
        <Folder explorerData={exporerData} handleInsertNode={handleInsertNode} setFileId={setFileId} isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
}

Hamburger.propTypes = {
  handleInsertNode: Proptypes.func.isRequired,
  exporerData: Proptypes.object.isRequired,
  setFileId: Proptypes.number.isRequired
};

export default Hamburger;