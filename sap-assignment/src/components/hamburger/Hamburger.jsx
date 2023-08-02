/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import Node from '../node/Node';
import Folder from '../folder/folder';
import explorer from '../../data/folderData';
import useTraverseTree from '../../hook/use-traverse-tree';

function Hamburger() {
  const [exporerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(exporerData, folderId, item, isFolder);
    setExplorerData(finalTree);

  };

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
        <Folder explorerData={exporerData} handleInsertNode={handleInsertNode} />
      </div>
    </div>
  );
}

export default Hamburger;