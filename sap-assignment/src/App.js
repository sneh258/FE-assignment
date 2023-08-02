import React,{useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Editor from './pages/Editor/Editor';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

function App() {
  const[menu,setMenu]=useState(true);
  const handleMenu=()=>{
    setMenu(!menu);
  };
  console.log(localStorage.getItem('data'));

  return (
    <div className="App">
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline /> */}
      <Header handleMenu={handleMenu} />
      <Navbar/>
      <Editor menu={menu} handleMenu={handleMenu} />
      {/* </ThemeProvider> */}
    </div>

  );
}

export default App;
