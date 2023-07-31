import React,{useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Editor from './pages/Editor/Editor';

function App() {
  const[menu,setMenu]=useState(false);
  const handleMenu=()=>{
    setMenu(!menu);
  };

  return (
    <div className="App">
      <Header handleMenu={handleMenu} />
      <Navbar/>
      <Editor menu={menu} handleMenu={handleMenu} />
    </div>

  );
}

export default App;
