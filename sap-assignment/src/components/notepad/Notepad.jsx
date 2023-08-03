import React,{useState} from 'react';
import { useEffect } from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import useTraverseTree from '../../hook/use-traverse-tree';
import 'react-quill/dist/quill.snow.css';

const Notepad = ({fileId}) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };
  const [data,setData]=useState({});
  // const handleQuillChange = (content) => {
  //   setData(content);
  //   localStorage.setItem('editorData', content); // Save data to localStorage
  // };
  const {getNode}=useTraverseTree(data);

  
  useEffect(()=>{
    const allFileData=JSON.parse(localStorage.getItem('data'));
    console.log(allFileData);
    setData(allFileData);
  },[]);
  console.log(data);
  console.log(getNode(data,fileId));
  return <ReactQuill value={getNode(data,fileId)?.content??''} modules={modules}/>;
 
};

Notepad.propTypes={
  fileId: PropTypes.number.isRequired
};

export default Notepad;
