import React, { useState } from 'react';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Folder({ explorerData, handleInsertNode, setFileId,isActive,setIsActive}) {

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });
  const handleActive=(id)=>{
    setIsActive(id);
  };
  const handleNewFolder = (e, t) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: t
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });

    }

  };


  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 5, paddingLeft: '20px' }}>
        <div className={isActive===explorerData.id?'active-folder':'folder'} onClick={() => {setExpand(!expand);
          handleActive(explorerData.id);}}><span><KeyboardArrowDownIcon />{explorerData.name}</span>
          <div className='flex gap-4'>
            <button onClick={(e) => handleNewFolder(e, true)}><CreateNewFolderOutlinedIcon /></button>
            <button onClick={(e) => handleNewFolder(e, false)}><NoteAddOutlinedIcon /></button>
          </div>
        </div>
        <div style={{ display: expand ? 'block' : 'none', paddingLeft: '35px' }}>
          {
            showInput.visible && (
              <div className='inputContainer'>
                <span>{showInput.isFolder ? <CreateNewFolderOutlinedIcon /> : <NoteAddOutlinedIcon />}</span>
                <input className='input'
                  autoFocus
                  onKeyDown={onAddFolder}
                  type={'text'}
                  onBlur={() => setShowInput({ ...showInput, visible: false })} />
              </div>
            )
          }
          {explorerData.items.map((exp) => {
            return (<Folder handleInsertNode={handleInsertNode} explorerData={exp} key={exp.id} setFileId={setFileId} isActive={isActive} setIsActive={setIsActive} />);
          })}
        </div>
      </div>
    );
  }
  else {
    return <span className={isActive===explorerData.id?'active-file':'file'} onClick={() => {setFileId(explorerData.id);
      setIsActive(explorerData.id);
    }}>📄{explorerData.name}</span>;
  }
}

Folder.propTypes = {
  explorerData: PropTypes.object.isRequired,
  handleInsertNode: PropTypes.func.isRequired,
  setFileId: PropTypes.func.isRequired,
  isActive:PropTypes.number.isRequired,
  setIsActive: PropTypes.func.isRequired
};

export default Folder;