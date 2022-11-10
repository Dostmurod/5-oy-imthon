import React from 'react'
import './App.scss';
import Search from './components/SearchResults/Search';
import { Routes, Route, Link } from 'react-router-dom'
import Users from './components/Users/Users';
import {valueCon} from './context'
import Navbar from './components/Navbar';
import Footer from "./components/Footer/index"

function App() {


  const [value, setValue] = React.useContext(valueCon)




  return (
    <>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>

        <Route path="*" element={<Users  />} />
        <Route path="/search" element={<Search />} />

      </Routes>

    


    </>
  );
}

export default App;
