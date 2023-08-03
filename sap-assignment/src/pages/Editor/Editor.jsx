import React,{useEffect, useState} from 'react';
import Hamburger from '../../components/hamburger/Hamburger';
import Notepad from '../../components/notepad/Notepad';
import explorer from '../../data/folderData';
import Proptypes from 'prop-types';
import useTraverseTree from '../../hook/use-traverse-tree';


function Editor({menu}) {
  const [exporerData, setExplorerData] = useState(explorer);
  const[fileId,setFileId]=useState(-1);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(exporerData, folderId, item, isFolder);
    setExplorerData(finalTree);

  };
  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(exporerData));
  },[exporerData]);
  return (
    <div className='shadow-black gap-2 flex h-screen'>
      <div className='shadow-white w-fit' style={{display:menu?'block':'none'}}><Hamburger handleInsertNode={handleInsertNode} exporerData={exporerData} setFileId={setFileId}/></div>
      <div className={`shadow-white ${menu? 'w-3/4':'w-1'}`}><Notepad fileId={fileId}/></div>
    </div>
  );
}

Editor.propTypes={
  menu: Proptypes.bool.isRequired
};

export default Editor;